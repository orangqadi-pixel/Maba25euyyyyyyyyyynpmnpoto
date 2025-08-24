/** @type {import('next').NextConfig} */
const nextConfig = {
	output: "export",
	images: {
		remotePatterns: [
			{
				protocol: "https",
				hostname: "v2-students.unpad.ac.id",
				pathname: "/**", // Allow all paths under this domain
			},
		],
	},
};
module.exports = nextConfig;
