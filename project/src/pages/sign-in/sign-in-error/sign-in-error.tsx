type SignInErrorProps = {
  message: string,
}

const SignInError = ({message}: SignInErrorProps) => (
  <div className='sign-in__message'>
    <p dangerouslySetInnerHTML={{__html: message}}></p>
  </div>
);

export default SignInError;
