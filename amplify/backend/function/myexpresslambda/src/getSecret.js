// const {
//   SecretsManagerClient,
//   GetSecretValueCommand,
// } = require("@aws-sdk/client-secrets-manager");

// export const getSecret = async (secret_name) => {
//   console.log("Get secret has been called");
//   const client = new SecretsManagerClient({
//     region: "us-east-1",
//   });
//   let response;
//   console.log(`The secret name is ${secret_name}`);
//   try {
//     response = await client.send(
//       new GetSecretValueCommand({
//         SecretId: secret_name,
//         VersionStage: "AWSCURRENT", // VersionStage defaults to AWSCURRENT if unspecified
//       })
//     );
//   } catch (error) {
//     // For a list of exceptions thrown, see
//     // https://docs.aws.amazon.com/secretsmanager/latest/apireference/API_GetSecretValue.html
//     throw error;
//   }
//   const secret = response.SecretString;
//   console.log(`Secret is ${secret}`);
//   return secret;
// };

const getSecret = (secret_name) => {
  return secret_name;
};

exports.getSecret = getSecret;
