import { Hono } from 'hono'
import { poweredBy } from 'hono/powered-by'



const app = new Hono()

app.use('*', poweredBy())

app.get('/', (c) => {
  const clientUA = c.req.headers.get('User-Agent');
  const clientIP = c.req.headers.get('CF-Connecting-IP');
  const clientASN = c.req.cf.asn;
  const clientISP = c.req.cf.asOrganization;
  const clientCO = c.req.cf.country;
  const clientCI = c.req.cf.city;
  const clientRE = c.req.cf.region;
  const clientLAT = c.req.cf.latitude;
  const clientLON = c.req.cf.longitude;
  const clientPC = c.req.cf.postalCode;
  const clientTZ = c.req.cf.timezone;

  return c.text("Public IP: " + clientIP + "\n" + 
  "ASN: " + clientASN + "\n" + 
  "ISP: " + clientISP + "\n" + 
  "Country: " + clientCO + "\n" + 
  "City: " + clientCI + "\n" + 
  "Region: " + clientRE + "\n" + 
  "Latitude, Longitude: " + clientLAT + "," + clientLON + "\n" + 
  "Postal Code: " + clientPC + "\n" + 
  "Timezone: " + clientTZ + "\n" + 
  "User Agent: " + clientUA + "\n"
  );
})



export default app
