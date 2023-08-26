import abi from '../utils/BuyMeACoffee.json';
import { ethers } from 'ethers';
import Head from 'next/head';
import React, { useEffect, useState } from 'react';

export default function Home() {
  // Contract Address & ABI
  const contractAddress = '0x6968E861b047b4524b1d16Cb30e2F9707B03020E';
  const contractABI = abi.abi;

  // Component state
  const [currentAccount, setCurrentAccount] = useState('');
  const [name, setName] = useState('');
  const [message, setMessage] = useState('');
  const [isDarkMode, setIsDarkMode] = useState(false);


  const [currentpagenumber, setCurrentPageNumber] = useState(1);


  const onNameChange = (event) => {
    setName(event.target.value);
  };

  const onMessageChange = (event) => {
    setMessage(event.target.value);
  };

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
  };

  // Wallet connection logic
  const isWalletConnected = async () => {
    try {
      const { ethereum } = window;

      const accounts = await ethereum.request({ method: 'eth_accounts' });
      console.log('accounts: ', accounts);

      if (accounts.length > 0) {
        const account = accounts[0];
        console.log('wallet is connected! ' + account);
      } else {
        console.log('make sure MetaMask is connected');
      }
    } catch (error) {
      console.log('error: ', error);
    }
  };

  const connectWallet = async () => {
    try {
      const { ethereum } = window;

      if (!ethereum) {
        console.log('please install MetaMask');
      }

      const accounts = await ethereum.request({
        method: 'eth_requestAccounts',
      });

      setCurrentAccount(accounts[0]);
    } catch (error) {
      console.log(error);
    }
  };

  const buyCoffee = async () => {
    try {
      const { ethereum } = window;

      if (ethereum) {
        const provider = new ethers.providers.Web3Provider(ethereum, 'any');
        const signer = provider.getSigner();
        const buyMeACoffee = new ethers.Contract(
          contractAddress,
          contractABI,
          signer
        );

        console.log('buying coffee..');
        const coffeeTxn = await buyMeACoffee.buyCoffee(
          name ? name : 'anon',
          message ? message : 'Enjoy your coffee!',
          { value: ethers.utils.parseEther('0.001') }
        );

        await coffeeTxn.wait();

        console.log('mined ', coffeeTxn.hash);

        console.log('coffee purchased!');

        // Clear the form fields.
        setName('');
        setMessage('');
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    isWalletConnected();
  }, []);

































if(currentpagenumber === 1){
  
  



































  return (
    <center>
    <html
  style={{
    opacity: 1,
    backgroundImage:
      'radial-gradient(ellipse farthest-corner at 10px 10px, #bcbcbc, #bcbcbc 50%, #000000 50%)',
    backgroundSize: '10px 10px',
  }}
>
<center>

    <div
  className={`container ${isDarkMode ? 'darkMode' : ''}`}
  style={{
    border: isDarkMode ? '1px solid white' : '1px solid black',
    backgroundColor: isDarkMode ? 'black' : 'white',
    color: isDarkMode ? 'white' : 'black',
    width:'90vw'
  }}
>
<div
      className="nav-header"
      style={{
        zIndex: '2',

        backgroundColor: isDarkMode ? 'black' : 'white',
        borderBottom: isDarkMode ? '1px solid white' : '1px solid black',
      }}    >     
      
         <img
          style={{ width: '50px' }}
          src={!isDarkMode ? 'https://amplify-amplifya785c969872c4-staging-111600-deployment.s3.amazonaws.com/logo_white.png' : 'https://amplify-amplifya785c969872c4-staging-111600-deployment.s3.amazonaws.com/logo_black.png'}
          alt="Logo"
        />
      <div className="wallet-address" style={{ textAlign: 'left', maxWidth: '200px', overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap', color: isDarkMode ? 'white' : 'black' }}>
  {currentAccount && (
    <>
      {currentAccount.substring(0, 6)}...{currentAccount.substring(currentAccount.length - 4)}
    </>
  )}
</div>

<div className="nav-header" style={{ backgroundColor: isDarkMode ? 'black' : 'white', display: 'flex', alignItems: 'center', padding: '10px 20px' }}>
  <img
    style={{ width: '50px' }}
    src={!isDarkMode ? 'https://amplify-amplifya785c969872c4-staging-111600-deployment.s3.amazonaws.com/logo_white.png' : 'https://amplify-amplifya785c969872c4-staging-111600-deployment.s3.amazonaws.com/logo_black.png'}
    alt="Logo"
  />
  <div className="wallet-address" style={{ textAlign: 'left', maxWidth: '200px', overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap', color: isDarkMode ? 'white' : 'black', marginLeft: '10px' }}>
    {currentAccount && (
      <>
        {currentAccount.substring(0, 6)}...{currentAccount.substring(currentAccount.length - 4)}
      </>
    )}
  </div>
  <div className="toggle-darkmode" style={{ marginLeft: 'auto', marginRight: '50px', alignContent: 'right' }}>
    <label className="switch">
      <input type="checkbox" onChange={toggleDarkMode} />
      <span className="slider"></span>
    </label>
  </div>
</div>

      </div>
      <Head>
        <title>Bit_Lotto</title>
        <meta name="description" content="Lottery" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
  
      <main className="main">
        <br />
        <br />
        <br />
        <br />
  
  <div>


  <><img
      style={{
        zIndex: '-1',
        width: '150px',
        borderRadius: '50%',
        border: `3px solid ${isDarkMode ? 'black' : 'white'}`,
        animation: 'rotate 5s linear infinite',
      }}
      src={!isDarkMode ? 'https://amplify-amplifya785c969872c4-staging-111600-deployment.s3.amazonaws.com/logo_white.png' : 'https://amplify-amplifya785c969872c4-staging-111600-deployment.s3.amazonaws.com/logo_black.png'}
      alt="Logo"
    />
    <style jsx>{`
      .spinning-image-container {
        position: relative;
        z-index: -1; /* Adjust the z-index value */
      }
      @keyframes rotate {
        0% {
          transform: rotate(0deg);
        }
        100% {
          transform: rotate(360deg);
        }
      }
    `}</style>
</>
<br />
<img
              style={{
                width: '450px',
              }}
              src={!isDarkMode ? 'https://amplify-amplifya785c969872c4-staging-111600-deployment.s3.amazonaws.com/words_white.png' : 'https://amplify-amplifya785c969872c4-staging-111600-deployment.s3.amazonaws.com/words_black.png'}
              alt="Logo" />

  </div>
        {currentAccount ? (
          <><div>
                <form>


                  <div>
                    <button className="connect-button" type="button" onClick={buyCoffee}>
                      Send 1 Coffee for 0.001ETH
                    </button>
                  </div>
                </form>
              </div>
              
              
              
              
              <center>
              <div
                style={{
                  backgroundColor: isDarkMode ? 'rgba(0, 0, 0, 0.5)' : 'rgba(255, 255, 255, 0.5)',
                  backgroundImage: isDarkMode
                    ? 'radial-gradient(circle, #000 0.5px, #fff 0.5px)'
                    : 'radial-gradient(circle, #fff 0.5px, #000 0.5px)',
                  backgroundSize: '20px 20px',
                  padding: '20px',
                  margin: '20px',
                  border: '1px solid ' + (!isDarkMode ? 'white' : 'black'),
                  borderRadius: '0px',
                  width: '80vw'
                }}
              >

                  <table style={{ width: '100%', borderCollapse: 'collapse' }}>
                    <tbody>
                      <tr>
                        <td
                          style={{
                            padding: '10px',
                            textAlign: 'left',
                            opacity: 1,
                            color: !isDarkMode ? 'white' : 'black',
                          }}
                        >
                          <h2>About bit_lotto</h2>
                          <p>
                            Welcome to bit_lotto, your own crypto lottery! Participate for a chance to win big prizes using your tokens. Join the excitement and be part of the crypto lottery community.
                          </p>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
                </center></>
        ) : (


                <><>

                  <button className="connect-button" onClick={connectWallet}>
                    Connect your wallet
                  </button></><br /></>




        )}
       


<p>
        Welcome <b>YourAddressHere</b>, you have{' '}
        <b>YourBalanceHere TokenSymbolHere</b>.
      </p>
      <center>
  {/* Statistics Table */}
  <table
    style={{
      margin: '30px',
      backgroundColor: isDarkMode ? '#000' : '#fff',
      color: isDarkMode ? '#fff' : '#000',
      borderCollapse: 'collapse',
      width: '80vw',
      border: '1px solid ' + (isDarkMode ? '#fff' : '#333'),
      marginTop: '20px'
    }}
  >
    <thead>
      <tr>
        <th style={{ border: '1px solid ' + (isDarkMode ? '#fff' : '#333'), padding: '10px' }}>Category</th>
        <th style={{ border: '1px solid ' + (isDarkMode ? '#fff' : '#333'), padding: '10px' }}>Value</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td style={{ border: '1px solid ' + (isDarkMode ? '#fff' : '#333'), padding: '10px' }}>Total Participants</td>
        <td style={{ border: '1px solid ' + (isDarkMode ? '#fff' : '#333'), padding: '10px' }}>1000</td>
      </tr>
      <tr>
        <td style={{ border: '1px solid ' + (isDarkMode ? '#fff' : '#333'), padding: '10px' }}>Winners</td>
        <td style={{ border: '1px solid ' + (isDarkMode ? '#fff' : '#333'), padding: '10px' }}>50</td>
      </tr>
      <tr>
        <td style={{ border: '1px solid ' + (isDarkMode ? '#fff' : '#333'), padding: '10px' }}>Total Jackpot</td>
        <td style={{ border: '1px solid ' + (isDarkMode ? '#fff' : '#333'), padding: '10px' }}>5000 Tokens</td>
      </tr>
    </tbody>
  </table>
  </center>
  <center>

      {/* bit_lotto Information Section */}
      <div
  style={{
    backgroundColor: isDarkMode ? 'rgba(0, 0, 0, 0.5)' : 'rgba(255, 255, 255, 0.5)',
    backgroundImage: isDarkMode
      ? 'radial-gradient(circle, #ffffff 0.5px, #000000 0.5px)'
      : 'radial-gradient(circle, #000 0.5px, #fff 0.5px)',
    backgroundSize: '20px 20px',
    padding: '20px',
    margin: '20px',
    border: '1px solid ' + (isDarkMode ? 'white' : 'black'),
    borderRadius: '0px',
    width: '80vw'

  }}
>
  
  <table style={{ width: '100%', borderCollapse: 'collapse' }}>
    <tbody>
      <tr>
        <td
          style={{
            padding: '10px',
            textAlign: 'left',
            opacity: 1,
            color: isDarkMode ? 'white' : 'black',
          }}
        >
          <h2>About bit_lotto</h2>
          <p>
            Welcome to bit_lotto, your own crypto lottery! Participate for a chance to win big prizes using your tokens. Join the excitement and be part of the crypto lottery community.
          </p>
        </td>
      </tr>
    </tbody>
  </table>
</div>
</center>


<center>

      {/* bit_lotto Information Section */}
      <div
  style={{
    backgroundColor: isDarkMode ? 'rgba(0, 0, 0, 0.5)' : 'rgba(255, 255, 255, 0.5)',
    backgroundImage: isDarkMode
      ? 'radial-gradient(circle, #ffffff 0.5px, #000000 0.5px)'
      : 'radial-gradient(circle, #000 0.5px, #fff 0.5px)',
    backgroundSize: '20px 20px',
    padding: '20px',
    margin: '20px',
    border: '1px solid ' + (isDarkMode ? 'white' : 'black'),
    borderRadius: '0px',
    width: '80vw'

  }}
>
  
  <table style={{ width: '100%', borderCollapse: 'collapse' }}>
    <tbody>
      <tr>
        <td
          style={{
            padding: '10px',
            textAlign: 'left',
            opacity: 1,
            color: isDarkMode ? 'white' : 'black',
          }}
        >
          <h2>About bit_lotto</h2>
          <p>
            Welcome to bit_lotto, your own crypto lottery! Participate for a chance to win big prizes using your tokens. Join the excitement and be part of the crypto lottery community.
          </p>
        </td>
      </tr>
    </tbody>
  </table>
</div>
</center><center>

{/* bit_lotto Information Section */}
<div
style={{
backgroundColor: isDarkMode ? 'rgba(0, 0, 0, 0.5)' : 'rgba(255, 255, 255, 0.5)',
backgroundImage: isDarkMode
? 'radial-gradient(circle, #ffffff 0.5px, #000000 0.5px)'
: 'radial-gradient(circle, #000 0.5px, #fff 0.5px)',
backgroundSize: '20px 20px',
padding: '20px',
margin: '20px',
border: '1px solid ' + (isDarkMode ? 'white' : 'black'),
borderRadius: '0px',
width: '80vw'

}}
>

<table style={{ width: '100%', borderCollapse: 'collapse' }}>
<tbody>
<tr>
  <td
    style={{
      padding: '10px',
      textAlign: 'left',
      opacity: 1,
      color: isDarkMode ? 'white' : 'black',
    }}
  >
    <h2>About bit_lotto</h2>
    <p>
      Welcome to bit_lotto, your own crypto lottery! Participate for a chance to win big prizes using your tokens. Join the excitement and be part of the crypto lottery community.
    </p>
  </td>
</tr>
</tbody>
</table>
</div>
</center><center>

{/* bit_lotto Information Section */}
<div
style={{
backgroundColor: isDarkMode ? 'rgba(0, 0, 0, 0.5)' : 'rgba(255, 255, 255, 0.5)',
backgroundImage: isDarkMode
? 'radial-gradient(circle, #ffffff 0.5px, #000000 0.5px)'
: 'radial-gradient(circle, #000 0.5px, #fff 0.5px)',
backgroundSize: '20px 20px',
padding: '20px',
margin: '20px',
border: '1px solid ' + (isDarkMode ? 'white' : 'black'),
borderRadius: '0px',
width: '80vw'

}}
>

<table style={{ width: '100%', borderCollapse: 'collapse' }}>
<tbody>
<tr>
  <td
    style={{
      padding: '10px',
      textAlign: 'left',
      opacity: 1,
      color: isDarkMode ? 'white' : 'black',
    }}
  >
    <h2>About bit_lotto</h2>
    <p>
      Welcome to bit_lotto, your own crypto lottery! Participate for a chance to win big prizes using your tokens. Join the excitement and be part of the crypto lottery community.
    </p>
  </td>
</tr>
</tbody>
</table>
</div>
</center><center>

{/* bit_lotto Information Section */}
<div
style={{
backgroundColor: isDarkMode ? 'rgba(0, 0, 0, 0.5)' : 'rgba(255, 255, 255, 0.5)',
backgroundImage: isDarkMode
? 'radial-gradient(circle, #ffffff 0.5px, #000000 0.5px)'
: 'radial-gradient(circle, #000 0.5px, #fff 0.5px)',
backgroundSize: '20px 20px',
padding: '20px',
margin: '20px',
border: '1px solid ' + (isDarkMode ? 'white' : 'black'),
borderRadius: '0px',
width: '80vw'

}}
>

<table style={{ width: '100%', borderCollapse: 'collapse' }}>
<tbody>
<tr>
  <td
    style={{
      padding: '10px',
      textAlign: 'left',
      opacity: 1,
      color: isDarkMode ? 'white' : 'black',
    }}
  >
    <h2>About bit_lotto</h2>
    <p>
      Welcome to bit_lotto, your own crypto lottery! Participate for a chance to win big prizes using your tokens. Join the excitement and be part of the crypto lottery community.
    </p>
  </td>
</tr>
</tbody>
</table>
</div>
</center><center>

{/* bit_lotto Information Section */}
<div
style={{
backgroundColor: isDarkMode ? 'rgba(0, 0, 0, 0.5)' : 'rgba(255, 255, 255, 0.5)',
backgroundImage: isDarkMode
? 'radial-gradient(circle, #ffffff 0.5px, #000000 0.5px)'
: 'radial-gradient(circle, #000 0.5px, #fff 0.5px)',
backgroundSize: '20px 20px',
padding: '20px',
margin: '20px',
border: '1px solid ' + (isDarkMode ? 'white' : 'black'),
borderRadius: '0px',
width: '80vw'

}}
>

<table style={{ width: '100%', borderCollapse: 'collapse' }}>
<tbody>
<tr>
  <td
    style={{
      padding: '10px',
      textAlign: 'left',
      opacity: 1,
      color: isDarkMode ? 'white' : 'black',
    }}
  >
    <h2>About bit_lotto</h2>
    <p>
      Welcome to bit_lotto, your own crypto lottery! Participate for a chance to win big prizes using your tokens. Join the excitement and be part of the crypto lottery community.
    </p>
  </td>
</tr>
</tbody>
</table>
</div>
</center>



<img
  src={isDarkMode ? 'https://amplify-amplifya785c969872c4-staging-111600-deployment.s3.amazonaws.com/3b.png' : 'https://amplify-amplifya785c969872c4-staging-111600-deployment.s3.amazonaws.com/3w.png'}
  alt="Image"
  style={{
    border: `1px solid ${isDarkMode ? 'black' : 'white'}`,
    width: '70vw'
  }}
/>

<center>

      {/* bit_lotto Information Section */}
      <div
  style={{
    backgroundColor: isDarkMode ? 'rgba(0, 0, 0, 0.5)' : 'rgba(255, 255, 255, 0.5)',
    backgroundImage: isDarkMode
      ? 'radial-gradient(circle, #ffffff 0.5px, #000000 0.5px)'
      : 'radial-gradient(circle, #000 0.5px, #fff 0.5px)',
    backgroundSize: '20px 20px',
    padding: '20px',
    margin: '20px',
    border: '1px solid ' + (isDarkMode ? 'white' : 'black'),
    borderRadius: '0px',
    width: '80vw'

  }}
>
  
  <table style={{ width: '100%', borderCollapse: 'collapse' }}>
    <tbody>
      <tr>
        <td
          style={{
            padding: '10px',
            textAlign: 'left',
            opacity: 1,
            color: isDarkMode ? 'white' : 'black',
          }}
        >
          <h2>About bit_lotto</h2>
          <p>
            Welcome to bit_lotto, your own crypto lottery! Participate for a chance to win big prizes using your tokens. Join the excitement and be part of the crypto lottery community.
          </p>
        </td>
      </tr>
    </tbody>
  </table>
</div>
</center><center>

{/* bit_lotto Information Section */}
<div
style={{
backgroundColor: isDarkMode ? 'rgba(0, 0, 0, 0.5)' : 'rgba(255, 255, 255, 0.5)',
backgroundImage: isDarkMode
? 'radial-gradient(circle, #ffffff 0.5px, #000000 0.5px)'
: 'radial-gradient(circle, #000 0.5px, #fff 0.5px)',
backgroundSize: '20px 20px',
padding: '20px',
margin: '20px',
border: '1px solid ' + (isDarkMode ? 'white' : 'black'),
borderRadius: '0px',
width: '80vw'

}}
>

<table style={{ width: '100%', borderCollapse: 'collapse' }}>
<tbody>
<tr>
  <td
    style={{
      padding: '10px',
      textAlign: 'left',
      opacity: 1,
      color: isDarkMode ? 'white' : 'black',
    }}
  >
    <h2>About bit_lotto</h2>
    <p>
      Welcome to bit_lotto, your own crypto lottery! Participate for a chance to win big prizes using your tokens. Join the excitement and be part of the crypto lottery community.
    </p>
  </td>
</tr>
</tbody>
</table>
</div>
</center>


<br />



      
      </main>
  
      <footer style={{marginBottom: '30px', width: '100%', borderTop: `1px solid ${!isDarkMode ? 'black' : 'white'}`, backgroundColor: isDarkMode ? 'black' : 'white', color: isDarkMode ? 'white' : 'black', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
    <div style={{ display: 'flex', alignItems: 'center' }}>
      <img
        style={{ width: '20px', padding: '15px' }}
        src={isDarkMode ? 'https://amplify-amplifya785c969872c4-staging-111600-deployment.s3.amazonaws.com/fb.png' : 'https://amplify-amplifya785c969872c4-staging-111600-deployment.s3.amazonaws.com/fw.png'}
        alt="Facebook Icon"
      />
      <img
        style={{ width: '20px', padding: '15px' }}
        src={isDarkMode ? 'https://amplify-amplifya785c969872c4-staging-111600-deployment.s3.amazonaws.com/tb.png' : 'https://amplify-amplifya785c969872c4-staging-111600-deployment.s3.amazonaws.com/tw.png'}
        alt="Twitter Icon"
      />
      <img
        style={{ width: '20px', padding: '15px' }}
        src={isDarkMode ? 'https://amplify-amplifya785c969872c4-staging-111600-deployment.s3.amazonaws.com/ib.png' : 'https://amplify-amplifya785c969872c4-staging-111600-deployment.s3.amazonaws.com/iw.png'}
        alt="Instagram Icon"
      />
      <img
        style={{ width: '20px', padding: '15px' }}
        src={isDarkMode ? 'https://amplify-amplifya785c969872c4-staging-111600-deployment.s3.amazonaws.com/yb.png' : 'https://amplify-amplifya785c969872c4-staging-111600-deployment.s3.amazonaws.com/yw.png'}
        alt="Google Icon"
      />
      <img
        style={{ width: '20px', padding: '15px' }}
        src={isDarkMode ? 'https://amplify-amplifya785c969872c4-staging-111600-deployment.s3.amazonaws.com/gb.png' : 'https://amplify-amplifya785c969872c4-staging-111600-deployment.s3.amazonaws.com/gw.png'}
        alt="GitHub Icon"
      />
    </div>
</footer>

    </div>
    </center>

    </html>
    </center>
  );
      }








    
      

















  






}
