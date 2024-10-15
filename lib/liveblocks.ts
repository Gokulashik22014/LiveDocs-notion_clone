import {Liveblocks} from "@liveblocks/node"

const key=process.env.LIVEBLOCKS_SECRET_KEY
if(!key) throw new Error("No key is provided")
const liveblocks=new Liveblocks({
    secret:key
})

export default liveblocks