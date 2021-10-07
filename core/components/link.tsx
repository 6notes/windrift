/** A Link that the user interacts with to potentially change state. If no handler
is supplied, then the text is displayed as static HTML. HTML markup embedded in the
string will be rendered but do not embed React components; they won't work.

This typically occurs for the last item in a Choice list. */

import { Tag } from 'core/types'

interface LinkProps {
    text: string
    index?: number
    handler: any
    tag?: Tag
}
const Link = ({ text, index, handler, tag }: LinkProps): JSX.Element => {
    if (handler) {
        return (
            // eslint-disable-next-line jsx-a11y/anchor-is-valid
            <a
                href="#"
                data-tag={tag}
                onClick={() => handler(event, index)}
                dangerouslySetInnerHTML={{ __html: text }}
            />
        )
    }
    return <span className="selected" dangerouslySetInnerHTML={{ __html: text }} />
}

export default Link
