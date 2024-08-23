import FormSchema from "./FormSchema.js"
import run from "./sendData.js"
import fs from "fs"


export const FormController = async (req, res) => {
    try {
        const final={...req.files[0],...req.body}
        // console.log(final)
        
        const url = await run(final)
        const data1 = await FormSchema.create({ name: final.name, text: final.text, image: url })

        fs.unlink(final.path, (err) => {
            if (err) {
                console.log(err)
                return
            }
        })

        return res.json(data1);
    }
    catch (err) {
        console.log(err)
    }
}