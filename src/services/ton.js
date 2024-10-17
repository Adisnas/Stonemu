import TonWeb from 'tonweb';

const tonweb = new TonWeb(new TonWeb.HttpProvider('https://toncenter.com/api/v2/jsonRPC'));

export const createWallet = async () => {
  const wallet = tonweb.wallet.create();
  return {
    address: await wallet.getAddress(),
    publicKey: wallet.publicKey,
    secretKey: wallet.secretKey,
  };
};

export const getBalance = async (address) => {
  const balance = await tonweb.getBalance(address);
  return TonWeb.utils.fromNano(balance);
};

export const sendTransaction = async (from, to, amount, secretKey) => {
  const wallet = new tonweb.wallet.WalletContract(tonweb.provider, {
    publicKey: TonWeb.utils.hexToBytes(from.publicKey),
    wc: 0,
  });

  const seqno = await wallet.methods.seqno().call();
  const transfer = await wallet.methods.transfer({
    secretKey: TonWeb.utils.hexToBytes(secretKey),
    toAddress: to,
    amount: TonWeb.utils.toNano(amount),
    seqno: seqno,
    payload: '',
    sendMode: 3,
  });

  return await transfer.send();
};
