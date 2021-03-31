import NextAuth from 'next-auth';
import Providers from 'next-auth/providers';
import axios from 'axios';

const options = {
  providers: [
    Providers.Discord({
      clientId: process.env.DISCORD_CLIENT_ID,
      clientSecret: process.env.DISCORD_CLIENT_SECRET,
    }),
  ],
  // eslint-disable-next-line sort-keys
  callbacks: {
    async signIn(user, account, profile) {
      const adminCheck = await axios
        .get(`${process.env.APIURL}/holores/adminCheck`, {
          headers: {
            Authorization: process.env.APITOKEN,
          },
          params: {
            id: profile.id,
          },
        })
        .catch(() => {
          return false;
        });

      const artistCheck = await axios
        .get(`${process.env.APIURL}/holores/artistCheck`, {
          headers: {
            Authorization: process.env.APITOKEN,
          },
          params: {
            id: profile.id,
          },
        })
        .catch(() => {
          return false;
        });

      // eslint-disable-next-line no-param-reassign
      user.artist = artistCheck?.data;
      // eslint-disable-next-line no-param-reassign
      user.admin = adminCheck?.data;

      return adminCheck?.data === true || artistCheck?.data === true;
    },
  },
  jwt: {
    signingKey: process.env.JWT_SIGNING_PRIVATE_KEY,
  },
  secret: process.env.AUTHSECRET,
};

export default (req, res) => NextAuth(req, res, options);
