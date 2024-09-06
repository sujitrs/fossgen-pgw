
export default async function Page() {
  let dataString = 'eyJhbGciOiJIUzI1NiIsImNsaWVudGlkIjoidWZvc3NnZW52MiJ9.ewoibWVyY2lkIjoiVUZPU1NHRU5WMiIsCiJvcmRlcmlkIjoiVUFUTTR4Y2RmcmRyZmRkIiwKImFtb3VudCI6IjEwMC4wMCIsCiJvcmRlcl9kYXRlIjoiMjAyNC0wMi0yMFQxMDoxMjowMCswNTozMCIsCiJjdXJyZW5jeSI6IjM1NiIsCiJydSI6Imh0dHBzOi8vd3d3Lm1lcmNoYW50LmNvbS8iLAoiYWRkaXRpb25hbF9pbmZvIjp7CiAgImFkZGl0aW9uYWxfaW5mbzEiOiJUZXN0IiwKICAiYWRkaXRpb25hbF9pbmZvMiI6IlRlc3QxIgogIH0sCiJpdGVtY29kZSI6IkRJUkVDVCIsCiJkZXZpY2UiOnsKICAiaW5pdF9jaGFubmVsIjoiaW50ZXJuZXQiLAogICJpcCI6Ijc2Ljc2LjIxLjIxIiwKICAidXNlcl9hZ2VudCI6Ik1vemlsbGEvNS4wKFdpbmRvd3NOVDEwLjA7V09XNjQ7cnY6NTEuMClHZWNrby8yMDEwMDEwMUZpcmVmb3gvNTEuMCIsCiAgImFjY2VwdF9oZWFkZXIiOiJ0ZXh0L2h0bWwiLAogICJicm93c2VyX3R6IjoiLTMzMCIsCiAgImJyb3dzZXJfY29sb3JfZGVwdGgiOiIzMiIsCiAgImJyb3dzZXJfamF2YV9lbmFibGVkIjoiZmFsc2UiLAogICJicm93c2VyX3NjcmVlbl9oZWlnaHQiOiI2MDEiLAogICJicm93c2VyX3NjcmVlbl93aWR0aCI6IjY1NyIsCiAgImJyb3dzZXJfbGFuZ3VhZ2UiOiJlbi1VUyIsCiAgImJyb3dzZXJfamF2YXNjcmlwdF9lbmFibGVkIjoidHJ1ZSIKICB9Cn0.TCSShBWnGC9_NzZ1xgDJDP9DUdJzN2qNLoyzBNoGIN8';

  const options = {
    method: 'POST',
    body: dataString,
    headers: { 
      'Content-Type': 'application/jose',
      'Accept': 'application/jose',
      'BD-Traceid':'1723817310ABCD',
      'BD-Timestamp':'1723817310'
  }
}

const url = 'https://uat1.billdesk.com/u2/payments/ve1_2/orders/create';
let jsonResponse
    try {
      const response = await fetch(url, options)
      jsonResponse= await response.text();
      
      console.log('JSON response', jsonResponse);
    } catch(err) {
      console.log('ERROR', err);
    }


  
  return (
    <ul>
      {jsonResponse}
    </ul>
  )
}