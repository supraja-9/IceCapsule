import TextInput from '/src/components/TextInput'

const Login = () => (
  <div className="a-center h-screen">
    <div className="bg-[#e2e8f0] rounded-md w-[400px]">
      <div className="a-center pt-8 pb-4">
        <div className="v-center">
          <span className="pb-2 text-blue-500">Enter Email</span>
          <TextInput placeHolder="Enter Email" />
        </div>
      </div>
      <div className="a-center pb-4">
        <div className="v-center">
          <span className="pb-2 text-blue-500">Enter Password</span>
          <TextInput type="password" placeHolder="Enter Password" />
        </div>
      </div>
      <div className="a-center pt-5 pb-8">
        <button className="bg-blue-500 text-white px-6 py-3 rounded">
          Login with Google
        </button>
      </div>
    </div>
  </div>
)

export default Login
