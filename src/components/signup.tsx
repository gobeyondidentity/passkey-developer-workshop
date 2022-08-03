import BindCredential from "./bind-credential";
import RecoverCredential from "./recover-credential";
import GetCredentials from "./get-credentials";
import "bootstrap/dist/css/bootstrap.css";

export default function Signup() {
  return (
    <main className="flex-shrink-0 mb-5">
      <BindCredential></BindCredential>

      <div className="section-divider"></div>

      <GetCredentials></GetCredentials>

      <div className="section-divider"></div>

      <RecoverCredential></RecoverCredential>
    </main>
  )
}