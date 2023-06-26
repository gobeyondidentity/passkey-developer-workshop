// import { useEffect, useState } from 'react';
// import 'bootstrap/dist/css/bootstrap.css';
// import Highlight from 'react-highlight';
// import { signIn } from 'next-auth/react';

const BindPasskeyFromRedirect = () => {
  //   const [bindPasskeyError, setBindPasskeyError] = useState('');
  //   useEffect(() => {
  //     const bindPasskey = async () => {
  //       const BeyondIdentityEmbeddedSdk = await import(
  //         '../utils/BeyondIdentityEmbeddedSdk'
  //       );
  //       let embedded = new BeyondIdentityEmbeddedSdk.default();
  //       embedded
  //         .isBindPasskeyUrl(window.location.href)
  //         .then(async (shouldBindPasskey) => {
  //           if (shouldBindPasskey) {
  //             let bindPasskeyUrl = window.location.href;
  //             embedded
  //               .bindPasskey(bindPasskeyUrl)
  //               .then((result) => {
  //                 window.postMessage('update-passkeys', '*');
  //                 signIn('beyondidentity');
  //               })
  //               .catch((error) => {
  //                 setBindPasskeyError(error.toString());
  //               });
  //           }
  //         });
  //     };
  //     bindPasskey().catch(console.error);
  //   }, []);
  //   return (
  //     <div
  //       style={{
  //         display: 'flex',
  //         justifyContent: 'center',
  //         alignItems: 'center',
  //         height: '100vh',
  //       }}
  //     >
  //       <div className="container">
  //         <div className="row">
  //           {bindPasskeyError.length > 0 && (
  //             <div className="row row-cols-1 row-cols-md-1 mt-3">
  //               <div className="col">
  //                 <Highlight className="json">
  //                   {JSON.stringify(bindPasskeyError, null, 2)}
  //                 </Highlight>
  //               </div>
  //             </div>
  //           )}
  //         </div>
  //       </div>
  //     </div>
  //   );
};

export default BindPasskeyFromRedirect;
