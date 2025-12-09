
export async function POST(request) {
  const formData = await request.json()
  const {email, password} = formData
    console.log(email,password)
  // Validate fields 
  if (!email || !password) {
    return Response.json({ error: 'Empty Credentials' }, { status: 400 });
  }

  //backened logic

  //for success send 200, write other error codes and message here

  

  return new Response(JSON.stringify({ message: 'User created' }), { status: 200 });
}