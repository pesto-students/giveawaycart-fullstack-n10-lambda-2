  import dotenv from 'dotenv' 
  import fs from 'fs'
  import S3 from 'aws-sdk/clients/s3.js'

  dotenv.config()

  const region = process.env.AWS_S3_REGION
  const bucketName = process.env.AWS_S3_BUCKET_NAME
  const accessKeyId = process.env.AWS_S3_ACCESS_KEY
  const secretAccessKey = process.env.AWS_S3_SECRET_ACCESS_KEY
  
const s3 = new S3({
  region,
  accessKeyId,
  secretAccessKey
  })

//uplods a file to S3
export const uploadFileToS3 = (file) => {
  const fileStream = fs.createReadStream(file.path)

  const uploadParams = {
    Bucket: bucketName,
    Body: fileStream,
    Key: file.filename
  }

  return s3.upload(uploadParams).promise()
}


//downloads a file from S3


//  //var randomBytes = promisify(crypto.randomBytes)

// dotenv.config()
  
//   const region = "ap-southeast-1"
//   const bucketName = "hope-product-profile-images"
//   const accessKeyId = process.env.AWS_S3_ACCESS_KEY
//   const secretAccessKey = process.env.AWS_S3_SECRET_ACCESS_KEY

// const s3 = new aws.S3({
//   region,
//   accessKeyId,
//   secretAccessKey,
//   signatureVersion: 'v4'
// })

// export async function generateUploadUrl() {
  
//   const rawBytes = await randomBytes(16)
//   const imageName = rawBytes.toString('hex')

//   const params = ({
//     Bucket: bucketName,
//     Key: imageName,
//     Expires: 60
//   })

//   const uploadURL = await s3.getSignedUrlPromise('putObject', params)
//   return uploadURL
// }
