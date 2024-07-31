import React, { useState, useEffect } from "react";
import { ethers } from "ethers";

const ConnectWallet = () => {
  const [account, setAccount] = useState(null);
  const [error, setError] = useState(null);

  // Hàm yêu cầu người dùng kết nối MetaMask
  const connectWallet = async () => {
    if (window.ethereum) {
      try {
        // Yêu cầu quyền truy cập vào tài khoản của người dùng
        const accounts = await window.ethereum.request({
          method: "eth_requestAccounts"
        });
        setAccount(accounts[0]);
      } catch (err) {
        setError(err.message);
      }
    } else {
      setError("MetaMask không được tìm thấy. Hãy cài đặt MetaMask.");
    }
  };

  useEffect(() => {
    if (window.ethereum) {
      // Kiểm tra xem MetaMask đã kết nối chưa
      window.ethereum
        .request({ method: "eth_accounts" })
        .then((accounts) => {
          if (accounts.length > 0) {
            setAccount(accounts[0]);
          }
        })
        .catch((err) => setError(err.message));
    } else {
      setError("MetaMask không được tìm thấy. Hãy cài đặt MetaMask.");
    }
  }, []);

  return (
    <div>
      {account ? (
        <p>Tài khoản đã kết nối: {account}</p>
      ) : (
        <button
          onClick={connectWallet}
          style={{
            border: "1px solid black",
            backgroundColor: "Gray",
            color: "white",
            padding: "10px 20px",
            borderRadius: "5px"
          }}
        >
          Connect MetaMask
        </button>
      )}
      {error && <p style={{ color: "red" }}>{error}</p>}
    </div>
  );
};

export default ConnectWallet;
