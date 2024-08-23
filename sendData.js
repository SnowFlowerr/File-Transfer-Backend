import dotenv from 'dotenv';
import cloudinary from 'cloudinary'
dotenv.config()

cloudinary.v2.config({
    cloud_name:process.env.cloud_name,
    api_key:process.env.api_key,
    api_secret:process.env.api_secret,
})

async function run(img) {
    try{
        const res=await cloudinary.v2.uploader.upload(img.path,
            { resource_type: "auto",public_id:img.filename }
        )
        // console.log(res)
        return res.url;
        
    }
    catch(err){
        console.log(err)
    }
}

// function transformation(){
//     const optimizeUrl = cloudinary.url(res.public_id, {
//             transformation:[
//                 {
//                     quality:"auto",
//                     fetch_format:"auto",
//                     height:200,
//                     width:200,
//                     crop:"thumb",
//                     gravity:"face",
//                     radius: "max",
//                 }
//             ]
//         });
//         console.log(optimizeUrl);
//         return optimizeUrl;
// }

export default run;