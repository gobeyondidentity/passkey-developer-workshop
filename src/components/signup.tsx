import BindCredential from "./bind-credential";
import RecoverCredential from "./recover-credential";
import GetCredentials from "./get-credentials";

export default function Signup() {
  return (
    <>
      <BindCredential></BindCredential>

      <div className="section-divider"></div>

      <GetCredentials></GetCredentials>

      <div className="section-divider"></div>

      <RecoverCredential></RecoverCredential>
    </>
  )
}