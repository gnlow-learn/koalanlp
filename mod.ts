import { OKT } from "npm:koalanlp/API.js"
import { initialize } from "npm:koalanlp/Util.js"
import { Tagger, Parser } from "npm:koalanlp/proc.js"

await initialize({ packages: { OKT: "2.1.4" } })

const tagger = new Tagger(OKT)
const tagged = await tagger(
    "안녕하세요. 눈이 오는 설날 아침입니다."
)

for (const sent of tagged) {
    console.log(sent.toString())
}