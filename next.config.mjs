/** @type {import('next').NextC onfig} */
const nextConfig = {
        images: {
          remotePatterns: [
            {
              protocol: 'https',
              hostname: 'img.freepik.com',
              port: '3000',
              pathname: 'images.remotePatterns',
            },
          ],
        },
};

export default nextConfig;
