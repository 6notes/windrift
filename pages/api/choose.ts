import type { NextApiRequest, NextApiResponse } from 'next'
import { initPusher } from './util'

// POST a choice to the current channel
// TODO should this return anything?
// TODO something something error handling?

export default (req: NextApiRequest, res: NextApiResponse): void => {
    if (req.method === 'POST') {
        const pusher = initPusher()
        const { channel, tag, choice, player } = req.body
        const timestamp = new Date()
        pusher.trigger(channel, 'choose', { tag, choice, player, timestamp }).then(() => {
            res.status(200).json({})
        })
    }
}
