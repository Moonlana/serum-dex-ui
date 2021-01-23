import { mintTo } from '@project-serum/serum/lib/token-instructions';
import { PublicKey } from '@solana/web3.js';

enum NFT_Types {
  VIDEO = 'VIDEO',
  IMAGE = 'IMAGE',
  REDEEMABLE = 'REDEEMABLE',
}

export class NFT {
  img: Object;
  imgSmall: Object;
  name: string;
  supply: number;
  mintAddress: PublicKey;
  marketAddress: PublicKey;
  redeembable: boolean;
  keywords: string[];
  type: NFT_Types;
  redeemAddress?: PublicKey;
  redeemDescription?: string;
  auctionDeadLine?: string;
  description?: string;
  constructor(
    img: Object,
    imgSmall: Object,
    name: string,
    supply: number,
    mintAddress: PublicKey,
    marketAddress: PublicKey,
    redeembable: boolean,
    keywords: string[],
    type: NFT_Types,
    redeemAddress?: PublicKey,
    redeemDescription?: string,
    auctionDeadLine?: string,
    description?: string,
  ) {
    this.img = img;
    this.imgSmall = imgSmall;
    this.name = name;
    this.supply = supply;
    this.mintAddress = mintAddress;
    this.marketAddress = marketAddress;
    this.redeembable = redeembable;
    this.keywords = keywords;
    this.type = type;
    this.redeemAddress = redeemAddress;
    this.redeemDescription = redeemDescription;
    this.auctionDeadLine = auctionDeadLine;
    this.description = description;
  }
}

const NFTS: NFT[] = [
  new NFT(
    require('../../assets/nfts/FBycjnjoUW9hZh6a4VzkLCoYzFgjQBjHgbBhNuxZv3WA/FBycjnjoUW9hZh6a4VzkLCoYzFgjQBjHgbBhNuxZv3WA.gif'),
    require('../../assets/nfts/FBycjnjoUW9hZh6a4VzkLCoYzFgjQBjHgbBhNuxZv3WA/small.mp4'),
    'FIDA - NFT.',
    10,
    new PublicKey('FBycjnjoUW9hZh6a4VzkLCoYzFgjQBjHgbBhNuxZv3WA'),
    new PublicKey('Hoo738bVaLdJmjXL6TbdyHmWME7ZijhdkpTR7AwZPT9m'),
    false,
    ['fida', 'bonfida'],
    NFT_Types.VIDEO,
  ),
  new NFT(
    require('../../assets/nfts/4fRZgSrbc9o9BTqNwX2zsqLthwK63egGDu3VjWaZipmb/4fRZgSrbc9o9BTqNwX2zsqLthwK63egGDu3VjWaZipmb.gif'),
    require('../../assets/nfts/4fRZgSrbc9o9BTqNwX2zsqLthwK63egGDu3VjWaZipmb/small.mp4'),
    'FTX x Frontier Round 1',
    10,
    new PublicKey('4fRZgSrbc9o9BTqNwX2zsqLthwK63egGDu3VjWaZipmb'),
    new PublicKey('C4YD46QQ7K59MY6cDd8qJwcfPTggiWa2fCsWXUUfq6nk'),
    false,
    ['front', 'frontier', 'ftx', 'round'],
    NFT_Types.VIDEO,
  ),
  new NFT(
    require('../../assets/nfts/91fSFQsPzMLat9DHwLdQacW3i3EGnWds5tA5mt7yLiT9/91fSFQsPzMLat9DHwLdQacW3i3EGnWds5tA5mt7yLiT9.gif'),
    require('../../assets/nfts/91fSFQsPzMLat9DHwLdQacW3i3EGnWds5tA5mt7yLiT9/small.mp4'),
    'Unlimited Energy',
    10,
    new PublicKey('91fSFQsPzMLat9DHwLdQacW3i3EGnWds5tA5mt7yLiT9'),
    new PublicKey('BnWVMg9dvBLbQDR9j96QP8q85SFPWEsyouZUEMLevkE3'),
    false,
    ['unlimited', 'energy', 'bonfida', 'front'],
    NFT_Types.VIDEO,
  ),
  new NFT(
    require('../../assets/nfts/29PEpZeuqWf9tS2gwCjpeXNdXLkaZSMR2s1ibkvGsfnP/29PEpZeuqWf9tS2gwCjpeXNdXLkaZSMR2s1ibkvGsfnP.gif'),
    require('../../assets/nfts/29PEpZeuqWf9tS2gwCjpeXNdXLkaZSMR2s1ibkvGsfnP/small.mp4'),
    'Need for Speed',
    25,
    new PublicKey('29PEpZeuqWf9tS2gwCjpeXNdXLkaZSMR2s1ibkvGsfnP'),
    new PublicKey('6u8M7NH853WRpxnLs9qKKZn3ShR9QK4Y6kE6X9A1s7wK'),
    false,
    ['need', 'speed', 'front'],
    NFT_Types.VIDEO,
  ),
  new NFT(
    require('../../assets/nfts/AcstFzGGawvvdVhYV9bftr7fmBHbePUjhv53YK1W3dZo/AcstFzGGawvvdVhYV9bftr7fmBHbePUjhv53YK1W3dZo.gif'),
    require('../../assets/nfts/AcstFzGGawvvdVhYV9bftr7fmBHbePUjhv53YK1W3dZo/small.mp4'),
    'LSD',
    1,
    new PublicKey('AcstFzGGawvvdVhYV9bftr7fmBHbePUjhv53YK1W3dZo'),
    new PublicKey('BdU5UYU8AU9iTVJXF6Sxc63M6XY4XWqZpdq2PigoqA92'),
    false,
    ['lsd', 'gif'],
    NFT_Types.VIDEO,
  ),
  // new NFT(
  //   require('../../assets/nfts/3cZHQmZcubytufUeJjwRr7d68Qei2by7mPeSP5gVVUcX/3cZHQmZcubytufUeJjwRr7d68Qei2by7mPeSP5gVVUcX.gif'),
  //   require('../../assets/nfts/3cZHQmZcubytufUeJjwRr7d68Qei2by7mPeSP5gVVUcX/small.mp4'),
  //   'YFI',
  //   1,
  //   new PublicKey('3cZHQmZcubytufUeJjwRr7d68Qei2by7mPeSP5gVVUcX'),
  //   new PublicKey('6QSD6Fcc4gwwBBvRbbGXTsZ8cnb4iBjwh9jC5PjJDCpm'),
  //   false,
  //   ['yfi', 'andre', 'cronje'],
  //   NFT_Types.VIDEO,
  // ),
  // new NFT(
  //   require('../../assets/nfts/HsY8PNar8VExU335ZRYzg89fX7qa4upYu6vPMPFyCDdK/HsY8PNar8VExU335ZRYzg89fX7qa4upYu6vPMPFyCDdK.gif'),
  //   require('../../assets/nfts/HsY8PNar8VExU335ZRYzg89fX7qa4upYu6vPMPFyCDdK/small.mp4'),
  //   'ADOR OPENS',
  //   111,
  //   new PublicKey('HsY8PNar8VExU335ZRYzg89fX7qa4upYu6vPMPFyCDdK'),
  //   new PublicKey('CWMXgar54YBisdbSCM2JPd7kHkkX9fZMgCsvkWG5j4zo'),
  //   false,
  //   ['ador', 'opens', 'adors org'],
  //   NFT_Types.VIDEO,
  // ),
  new NFT(
    require('../../assets/nfts/EDP8TpLJ77M3KiDgFkZW4v4mhmKJHZi9gehYXenfFZuL/EDP8TpLJ77M3KiDgFkZW4v4mhmKJHZi9gehYXenfFZuL.jpeg'),
    require('../../assets/nfts/EDP8TpLJ77M3KiDgFkZW4v4mhmKJHZi9gehYXenfFZuL/small.jpeg'),
    'CMS - Rare',
    1,
    new PublicKey('EDP8TpLJ77M3KiDgFkZW4v4mhmKJHZi9gehYXenfFZuL'),
    new PublicKey('GgWVyfbM1tfJ72vGfCinmqxhdQQkyy8t67YzWzc9izsA'),
    false,
    ['cms', 'holding'],
    NFT_Types.IMAGE,
  ),
  // new NFT(
  //   require('../../assets/nfts/BrUKFwAABkExb1xzYU4NkRWzjBihVQdZ3PBz4m5S8if3/BrUKFwAABkExb1xzYU4NkRWzjBihVQdZ3PBz4m5S8if3.png'),
  //   require('../../assets/nfts/BrUKFwAABkExb1xzYU4NkRWzjBihVQdZ3PBz4m5S8if3/small.png'),
  //   'Tesla',
  //   10,
  //   new PublicKey('BrUKFwAABkExb1xzYU4NkRWzjBihVQdZ3PBz4m5S8if3'),
  //   new PublicKey('5vH2BhEqpBw7ouE1g4dYLstigj6zin1k9n9FzNfExYJK'),
  //   false,
  //   ['ftx', 'tsla', 'tesla', 'pepe', 'frog'],
  //   NFT_Types.IMAGE,
  // ),
  new NFT(
    require('../../assets/nfts/9CmQwpvVXRyixjiE3LrbSyyopPZohNDN1RZiTk8rnXsQ/9CmQwpvVXRyixjiE3LrbSyyopPZohNDN1RZiTk8rnXsQ.gif'),
    require('../../assets/nfts/9CmQwpvVXRyixjiE3LrbSyyopPZohNDN1RZiTk8rnXsQ/small.mp4'),
    'DeceFi',
    1,
    new PublicKey('9CmQwpvVXRyixjiE3LrbSyyopPZohNDN1RZiTk8rnXsQ'),
    new PublicKey('BKZSAFLqxBHKXJk3cw5pGdFCsKzyrouSG19KmiUQKXBh'),
    false,
    ['decefi', 'DCFI'],
    NFT_Types.VIDEO,
  ),
  // new NFT(
  //   require('../../assets/nfts/F6ST1wWkx2PeH45sKmRxo1boyuzzWCfpnvyKL4BGeLxF/F6ST1wWkx2PeH45sKmRxo1boyuzzWCfpnvyKL4BGeLxF.jpg'),
  //   require('../../assets/nfts/F6ST1wWkx2PeH45sKmRxo1boyuzzWCfpnvyKL4BGeLxF/small.jpg'),
  //   'Power User',
  //   50,
  //   new PublicKey('F6ST1wWkx2PeH45sKmRxo1boyuzzWCfpnvyKL4BGeLxF'),
  //   new PublicKey('3qgMuJsYwmYh66bu2LjurTciwDPnoiDPoXdyBAEjs8ss'),
  //   false,
  //   ['power', 'user'],
  //   NFT_Types.IMAGE,
  // ),
  // new NFT(
  //   require('../../assets/nfts/dZytJ7iPDcCu9mKe3srL7bpUeaR3zzkcVqbtqsmxtXZ/dZytJ7iPDcCu9mKe3srL7bpUeaR3zzkcVqbtqsmxtXZ.jpg'),
  //   require('../../assets/nfts/dZytJ7iPDcCu9mKe3srL7bpUeaR3zzkcVqbtqsmxtXZ/small.jpg'),
  //   'VIP Member',
  //   20,
  //   new PublicKey('dZytJ7iPDcCu9mKe3srL7bpUeaR3zzkcVqbtqsmxtXZ'),
  //   new PublicKey('2sF1kCMEUh3RW4x4znGj73sGqhsrHfzWS2KyTML4RD3u'),
  //   false,
  //   ['vip', 'member'],
  //   NFT_Types.IMAGE,
  // ),
  // new NFT(
  //   require('../../assets/nfts/8T4vXgwZUWwsbCDiptHFHjdfexvLG9UP8oy1psJWEQdS/8T4vXgwZUWwsbCDiptHFHjdfexvLG9UP8oy1psJWEQdS.gif'),
  //   require('../../assets/nfts/8T4vXgwZUWwsbCDiptHFHjdfexvLG9UP8oy1psJWEQdS/small.mp4'),
  //   'Uni Christmas',
  //   1,
  //   new PublicKey('8T4vXgwZUWwsbCDiptHFHjdfexvLG9UP8oy1psJWEQdS'),
  //   new PublicKey('Ev6wW561tdrsFakA9G9TddMbCsCnkbGGRy4d5B5Q43fQ'),
  //   false,
  //   ['uni', 'uniswap', 'christmas'],
  //   NFT_Types.VIDEO,
  // ),
  // new NFT(
  //   require('../../assets/nfts/EjFGGJSyp9UDS8aqafET5LX49nsG326MeNezYzpiwgpQ/EjFGGJSyp9UDS8aqafET5LX49nsG326MeNezYzpiwgpQ.jpg'),
  //   require('../../assets/nfts/EjFGGJSyp9UDS8aqafET5LX49nsG326MeNezYzpiwgpQ/small.jpg'),
  //   'BNB',
  //   1,
  //   new PublicKey('EjFGGJSyp9UDS8aqafET5LX49nsG326MeNezYzpiwgpQ'),
  //   new PublicKey('4aSALnU6zhdLwivcN4PAvb5L1pdn4HkCqq65MfSek4f4'),
  //   false,
  //   ['bnb', 'binance'],
  //   NFT_Types.IMAGE,
  // ),
  new NFT(
    require('../../assets/nfts/FkmkTr4en8CXkfo9jAwEMov6PVNLpYMzWr3Udqf9so8Z/FkmkTr4en8CXkfo9jAwEMov6PVNLpYMzWr3Udqf9so8Z.png'),
    require('../../assets/nfts/FkmkTr4en8CXkfo9jAwEMov6PVNLpYMzWr3Udqf9so8Z/small.png'),
    'Seldom',
    1500,
    new PublicKey('FkmkTr4en8CXkfo9jAwEMov6PVNLpYMzWr3Udqf9so8Z'),
    new PublicKey('AQWam8CiWsbqQWGToD9vwYRStZTYAuCuUKnV3iorDasA'),
    false,
    ['seldom', 'wallet'],
    NFT_Types.IMAGE,
  ),
  new NFT(
    require('../../assets/nfts/2gn1PJdMAU92SU5inLSp4Xp16ZC5iLF6ScEi7UBvp8ZD/2gn1PJdMAU92SU5inLSp4Xp16ZC5iLF6ScEi7UBvp8ZD.JPG'),
    require('../../assets/nfts/2gn1PJdMAU92SU5inLSp4Xp16ZC5iLF6ScEi7UBvp8ZD/small.JPG'),
    'Satoshi Closeup',
    10,
    new PublicKey('2gn1PJdMAU92SU5inLSp4Xp16ZC5iLF6ScEi7UBvp8ZD'),
    new PublicKey('7CGbje815jANonTXSBsdP7nkRLwy3ShLLvZFZRjtU7g2'),
    false,
    ['satoshi', 'closeup', 'genesis', 'block'],
    NFT_Types.IMAGE,
  ),
  new NFT(
    require('../../assets/nfts/7mhZHtPL4GFkquQR4Y6h34Q8hNkQvGc1FaNtyE43NvUR/7mhZHtPL4GFkquQR4Y6h34Q8hNkQvGc1FaNtyE43NvUR.JPG'),
    require('../../assets/nfts/7mhZHtPL4GFkquQR4Y6h34Q8hNkQvGc1FaNtyE43NvUR/small.JPG'),
    'Satoshi GB',
    10,
    new PublicKey('7mhZHtPL4GFkquQR4Y6h34Q8hNkQvGc1FaNtyE43NvUR'),
    new PublicKey('EHKqPgFnWHzUvgqzhroSeEDp4mD2em2RasxMmTPHDP6x'),
    false,
    ['satoshi', 'gb', 'genesis', 'block'],
    NFT_Types.IMAGE,
  ),
  // new NFT(
  //   require('../../assets/nfts/8RoKfLx5RCscbtVh8kYb81TF7ngFJ38RPomXtUREKsT2/8RoKfLx5RCscbtVh8kYb81TF7ngFJ38RPomXtUREKsT2.gif'),
  //   require('../../assets/nfts/8RoKfLx5RCscbtVh8kYb81TF7ngFJ38RPomXtUREKsT2/small.mp4'),
  //   'Satoshi OG',
  //   10,
  //   new PublicKey('8RoKfLx5RCscbtVh8kYb81TF7ngFJ38RPomXtUREKsT2'),
  //   new PublicKey('4uedKfwhVWreNYeQwzfd3nXSxR8A3muGpYdTxm88U7TX'),
  //   false,
  //   ['satoshi', 'og', 'genesis', 'block', 'gif'],
  //   NFT_Types.VIDEO,
  // ),
  // new NFT(
  //   require('../../assets/nfts/9rw5hyDngBQ3yDsCRHqgzGHERpU2zaLh1BXBUjree48J/9rw5hyDngBQ3yDsCRHqgzGHERpU2zaLh1BXBUjree48J.gif'),
  //   require('../../assets/nfts/9rw5hyDngBQ3yDsCRHqgzGHERpU2zaLh1BXBUjree48J/small.mp4'),
  //   'Satoshi BTC',
  //   10,
  //   new PublicKey('9rw5hyDngBQ3yDsCRHqgzGHERpU2zaLh1BXBUjree48J'),
  //   new PublicKey('4H9oaHZ5pqtyEiKdcySFJnzNrWdXiG2H8HZG8fwx3kGM'),
  //   false,
  //   ['satoshi', 'btc', 'genesis', 'block', 'gif'],
  //   NFT_Types.VIDEO,
  // ),
  new NFT(
    require('../../assets/nfts/AiD7J6D5Hny5DJB1MrYBc2ePQqy2Yh4NoxWwYfR7PzxH/AiD7J6D5Hny5DJB1MrYBc2ePQqy2Yh4NoxWwYfR7PzxH.gif'),
    require('../../assets/nfts/AiD7J6D5Hny5DJB1MrYBc2ePQqy2Yh4NoxWwYfR7PzxH/small.mp4'),
    'Satoshi GB',
    10,
    new PublicKey('AiD7J6D5Hny5DJB1MrYBc2ePQqy2Yh4NoxWwYfR7PzxH'),
    new PublicKey('5W39A7d5iqHzh7oUHyu37HBN2nx7Ptg4yrSvgz1A8sq9'),
    false,
    ['satoshi', 'gb', 'genesis', 'block', 'gif'],
    NFT_Types.VIDEO,
  ),
  // new NFT(
  //   require('../../assets/nfts/bxiA13fpU1utDmYuUvxvyMT8odew5FEm96MRv7ij3eb/bxiA13fpU1utDmYuUvxvyMT8odew5FEm96MRv7ij3eb.gif'),
  //   require('../../assets/nfts/bxiA13fpU1utDmYuUvxvyMT8odew5FEm96MRv7ij3eb/small.mp4'),
  //   'Satoshi',
  //   10,
  //   new PublicKey('bxiA13fpU1utDmYuUvxvyMT8odew5FEm96MRv7ij3eb'),
  //   new PublicKey('GXS6UKiTewG6FxwmwzkBKLRGyXfhZ5sbHwUcJZBZXrVT'),
  //   false,
  //   ['satoshi', 'genesis', 'block', 'gif'],
  //   NFT_Types.VIDEO,
  // ),
  // new NFT(
  //   require('../../assets/nfts/GoC24kpj6TkvjzspXrjSJC2CVb5zMWhLyRcHJh9yKjRF/GoC24kpj6TkvjzspXrjSJC2CVb5zMWhLyRcHJh9yKjRF.gif'),
  //   require('../../assets/nfts/GoC24kpj6TkvjzspXrjSJC2CVb5zMWhLyRcHJh9yKjRF/small.mp4'),
  //   'Satoshi Closeup',
  //   10,
  //   new PublicKey('GoC24kpj6TkvjzspXrjSJC2CVb5zMWhLyRcHJh9yKjRF'),
  //   new PublicKey('AfuXKRbioPV9WkxiCJvVwgCVY3Y5D2dHhr2NMUaKoXiD'),
  //   false,
  //   ['satoshi', 'closeup', 'genesis', 'block', 'gif'],
  //   NFT_Types.VIDEO,
  // ),
  // new NFT(
  //   require('../../assets/nfts/oCUduD44ETuZ65bpWdPzPDSnAdreg1sJrugfwyFZVHV/oCUduD44ETuZ65bpWdPzPDSnAdreg1sJrugfwyFZVHV.JPG'),
  //   require('../../assets/nfts/oCUduD44ETuZ65bpWdPzPDSnAdreg1sJrugfwyFZVHV/small.JPG'),
  //   'Satoshi BTC',
  //   10,
  //   new PublicKey('oCUduD44ETuZ65bpWdPzPDSnAdreg1sJrugfwyFZVHV'),
  //   new PublicKey('5rfx5u8aPY4MiSAvUxAqDFFhGgLGb8Luy1DQJVPcTt3e'),
  //   false,
  //   ['satoshi', 'btc', 'genesis', 'block'],
  //   NFT_Types.IMAGE,
  // ),
  // new NFT(
  //   require('../../assets/nfts/9Vvre2DxBB9onibwYDHeMsY1cj6BDKtEDccBPWRN215E/9Vvre2DxBB9onibwYDHeMsY1cj6BDKtEDccBPWRN215E.gif'),
  //   require('../../assets/nfts/9Vvre2DxBB9onibwYDHeMsY1cj6BDKtEDccBPWRN215E/small.mp4'),
  //   'Satoshi Nakamoto',
  //   1,
  //   new PublicKey('9Vvre2DxBB9onibwYDHeMsY1cj6BDKtEDccBPWRN215E'),
  //   new PublicKey('F4euXHP7KWijkhGqsGEqWy9iZKeNc1jg2LVodKHQ13PV'),
  //   false,
  //   ['satoshi', 'nakamoto'],
  //   NFT_Types.VIDEO,
  // ),
  // new NFT(
  //   require('../../assets/nfts/7RpFk44cMTAUt9CcjEMWnZMypE9bYQsjBiSNLn5qBvhP/7RpFk44cMTAUt9CcjEMWnZMypE9bYQsjBiSNLn5qBvhP.gif'),
  //   require('../../assets/nfts/7RpFk44cMTAUt9CcjEMWnZMypE9bYQsjBiSNLn5qBvhP/small.mp4'),
  //   'Charles Hoskinson',
  //   1,
  //   new PublicKey('7RpFk44cMTAUt9CcjEMWnZMypE9bYQsjBiSNLn5qBvhP'),
  //   new PublicKey('474bvPo2KH3L9E8fpBspKgeDGqW51ysiH5LTnbko1Njq'),
  //   false,
  //   ['charles', 'hoskinson'],
  //   NFT_Types.VIDEO,
  // ),
  // new NFT(
  //   require('../../assets/nfts/GyRkPAxpd9XrMHcBF6fYHVRSZQvQBwAGKAGQeBPSKzMq/GyRkPAxpd9XrMHcBF6fYHVRSZQvQBwAGKAGQeBPSKzMq.gif'),
  //   require('../../assets/nfts/GyRkPAxpd9XrMHcBF6fYHVRSZQvQBwAGKAGQeBPSKzMq/small.mp4'),
  //   'SBF',
  //   1,
  //   new PublicKey('GyRkPAxpd9XrMHcBF6fYHVRSZQvQBwAGKAGQeBPSKzMq'),
  //   new PublicKey('HFmsR4XGcSPbUv4sG4Km1TVr1V9reXZKgUQaYzSiKTpD'),
  //   false,
  //   ['sam', 'sbf', 'bankman-fried'],
  //   NFT_Types.VIDEO,
  // ),
  // new NFT(
  //   require('../../assets/nfts/6Ajg314uN3LiYwzAzvNQU3pYiPmtUt4kUGcKHtdSQuyS/6Ajg314uN3LiYwzAzvNQU3pYiPmtUt4kUGcKHtdSQuyS.gif'),
  //   require('../../assets/nfts/6Ajg314uN3LiYwzAzvNQU3pYiPmtUt4kUGcKHtdSQuyS/small.mp4'),
  //   '1EA',
  //   100,
  //   new PublicKey('6Ajg314uN3LiYwzAzvNQU3pYiPmtUt4kUGcKHtdSQuyS'),
  //   new PublicKey('4bjKcseam7kGa3QieMPxaJ3yZy1FXtwWxZ1meMYLancz'),
  //   false,
  //   ['eduardo', 'alimonda'],
  //   NFT_Types.VIDEO,
  // ),
  new NFT(
    require('../../assets/nfts/822s5k4kqGZU9HHH1TVkXZDMGYDjwTLKN53gTxk86G8g/822s5k4kqGZU9HHH1TVkXZDMGYDjwTLKN53gTxk86G8g.gif'),
    require('../../assets/nfts/822s5k4kqGZU9HHH1TVkXZDMGYDjwTLKN53gTxk86G8g/small.mp4'),
    'CZ vs SBF',
    1,
    new PublicKey('822s5k4kqGZU9HHH1TVkXZDMGYDjwTLKN53gTxk86G8g'),
    new PublicKey('2WbNP2KesAC4LekDhS8QTEjCTV5E3negSeJyMU4WBFaf'),
    false,
    ['cz', 'sbf', 'binance', 'ftx'],
    NFT_Types.VIDEO,
  ),
  new NFT(
    require('../../assets/nfts/FAT8nAdwWdAKyU3kaVAci6TGtPVyuTxBu5i37kjTwCf1/FAT8nAdwWdAKyU3kaVAci6TGtPVyuTxBu5i37kjTwCf1.gif'),
    require('../../assets/nfts/FAT8nAdwWdAKyU3kaVAci6TGtPVyuTxBu5i37kjTwCf1/small.mp4'),
    'Sound Wave',
    3,
    new PublicKey('FAT8nAdwWdAKyU3kaVAci6TGtPVyuTxBu5i37kjTwCf1'),
    new PublicKey('EHaWsSQCTBa92QuSM4XDDz5uj4EzZ5mjvgcEtJb2GFZp'),
    false,
    ['solana', 'sound', 'wave'],
    NFT_Types.VIDEO,
  ),
  new NFT(
    require('../../assets/nfts/jtY6S9LNrX1suVfPTWfrAgsPjCNkwi3G2yqNNToN6KX/jtY6S9LNrX1suVfPTWfrAgsPjCNkwi3G2yqNNToN6KX.gif'),
    require('../../assets/nfts/jtY6S9LNrX1suVfPTWfrAgsPjCNkwi3G2yqNNToN6KX/small.mp4'),
    'Serum Galaxy',
    10,
    new PublicKey('jtY6S9LNrX1suVfPTWfrAgsPjCNkwi3G2yqNNToN6KX'),
    new PublicKey('CbLaQjfJsBH9mA8L1yFSNxbq8VYWyDJyVRf6Xq7GVaVU'),
    false,
    ['serum', 'galazy', 'srm'],
    NFT_Types.VIDEO,
  ),
  new NFT(
    require('../../assets/nfts/HEZzKQ71Dsm4Eyc98G4EqHncWbdWEFJ5MuEf5fw2EnjQ/HEZzKQ71Dsm4Eyc98G4EqHncWbdWEFJ5MuEf5fw2EnjQ.gif'),
    require('../../assets/nfts/HEZzKQ71Dsm4Eyc98G4EqHncWbdWEFJ5MuEf5fw2EnjQ/small.mp4'),
    'Rainbow',
    5,
    new PublicKey('HEZzKQ71Dsm4Eyc98G4EqHncWbdWEFJ5MuEf5fw2EnjQ'),
    new PublicKey('4XPA13bFZ1AHxMzyNX9cp2VUYPWasq76qR4cVC9tkvFw'),
    false,
    ['rainbox', 'solana', 'srm'],
    NFT_Types.VIDEO,
  ),
];

export default NFTS;

export const REDEEMABLE_NFTS: NFT[] = [
  new NFT(
    require('../../assets/nfts/94w8qHS4XFadqJhWZzyfAS2bbj55ReFnVYB8BwewMNmf/94w8qHS4XFadqJhWZzyfAS2bbj55ReFnVYB8BwewMNmf.gif'),
    require('../../assets/nfts/94w8qHS4XFadqJhWZzyfAS2bbj55ReFnVYB8BwewMNmf/small.mp4'),
    'SRM Socks',
    5,
    new PublicKey('94w8qHS4XFadqJhWZzyfAS2bbj55ReFnVYB8BwewMNmf'),
    new PublicKey('H4WRoAMyGAxtTX5dLsvFYkxCgLXWjMUdWpNqST8E3jzx'),
    true,
    ['srm', 'serum', 'sock', 'kong'],
    NFT_Types.VIDEO,
    new PublicKey('9QTrBTjooTK4NQ5QkYQGUNkyo8grpMrrmjMXAh3bJVtd'),
    'This NFT can be redeemed for a physical pair of Serum Socks mailed to your door',
  ),
  new NFT(
    require('../../assets/nfts/7TRzvCqXN8KSXggbSyeEG2Z9YBBhEFmbtmv6FLbd4mmd/7TRzvCqXN8KSXggbSyeEG2Z9YBBhEFmbtmv6FLbd4mmd.jpg'),
    require('../../assets/nfts/7TRzvCqXN8KSXggbSyeEG2Z9YBBhEFmbtmv6FLbd4mmd/small.jpg'),
    'SRM tee-shirt',
    8,
    new PublicKey('7TRzvCqXN8KSXggbSyeEG2Z9YBBhEFmbtmv6FLbd4mmd'),
    new PublicKey('rxqQa92aD8ZZGuyc2mjCARG4f832dBmQo9xiasX5mzq'),
    true,
    ['srm', 't', 'shirt', 'tee-shirt', 'redeem'],
    NFT_Types.IMAGE,
    new PublicKey('4bGXwBj7222chiksjAF4XcsqebamRNQUBqxdRQeYHYMr'),
    'This NFT can be redeemed for a physical SRM tee-shirt mailed to your door. All sizes are availble (M/F).',
  ),
  new NFT(
    require('../../assets/nfts/8xH9FWLA5wbETiV6WM1yUUbAnSE3N2pZqZR6WW3aUQTJ/8xH9FWLA5wbETiV6WM1yUUbAnSE3N2pZqZR6WW3aUQTJ.png'),
    require('../../assets/nfts/8xH9FWLA5wbETiV6WM1yUUbAnSE3N2pZqZR6WW3aUQTJ/small.png'),
    'Ledger Nano X',
    30,
    new PublicKey('8xH9FWLA5wbETiV6WM1yUUbAnSE3N2pZqZR6WW3aUQTJ'),
    new PublicKey('327ubUZkUUAEdeWvyQYh1Ycs9mt6yDnt7jDAW47U3krw'),
    true,
    ['ledger', 'nano', 'x', 'black', 'friday'],
    NFT_Types.IMAGE,
    new PublicKey('EvXsVnNu9mxo63tPiGNbLy3mwb6Zy4qT59RR62Y2UJW1'),
    'This NFT can be redeemed for a Ledger Nano X branded Serum mailed to your door. The market will be unlisted on 30/11/2020 at 9pm UTC +8. After this date you will only be able to redeem.',
    '2020-11-30T21:00:00.000+08:00',
  ),
  new NFT(
    require('../../assets/nfts/AgdBQN2Sy2abiZ2KToWeUsQ9PHdCv95wt6kVWRf5zDkx/AgdBQN2Sy2abiZ2KToWeUsQ9PHdCv95wt6kVWRf5zDkx.jpg'),
    require('../../assets/nfts/AgdBQN2Sy2abiZ2KToWeUsQ9PHdCv95wt6kVWRf5zDkx/small.jpg'),
    'Bitcoin Tram',
    5,
    new PublicKey('AgdBQN2Sy2abiZ2KToWeUsQ9PHdCv95wt6kVWRf5zDkx'),
    new PublicKey('CWkuMPt24aZFA4sHTUs43zwp3N8Lh9UfKNAScQqQ8uUg'),
    true,
    ['bitcoin', 'tram', 'hong', 'kong'],
    NFT_Types.IMAGE,
    new PublicKey('FCHmpXY6AQifAwe6SjAEGfF6APTPEcCjyNFAHn83ijdb'),
    'This NFT can be redeemed for a physical Bitcoin Tram model mailed to your door',
    '2020-11-06T21:00:00.000+08:00',
  ),
];

export const ALL = [...REDEEMABLE_NFTS, ...NFTS];

export const DEFAULT_NFT = new NFT(
  require('../../assets/nfts/AcstFzGGawvvdVhYV9bftr7fmBHbePUjhv53YK1W3dZo/AcstFzGGawvvdVhYV9bftr7fmBHbePUjhv53YK1W3dZo.gif'),
  require('../../assets/nfts/AcstFzGGawvvdVhYV9bftr7fmBHbePUjhv53YK1W3dZo/small.mp4'),
  'LSD',
  1,
  new PublicKey('AcstFzGGawvvdVhYV9bftr7fmBHbePUjhv53YK1W3dZo'),
  new PublicKey('BdU5UYU8AU9iTVJXF6Sxc63M6XY4XWqZpdq2PigoqA92'),
  false,
  ['lsd', 'gif'],
  NFT_Types.VIDEO,
);

export const getNftList = () => {
  return ALL;
};

export const getRedeemableNftList = () => {
  return REDEEMABLE_NFTS;
};

export const getNonRedeemableNftList = () => {
  return NFTS;
};

export const getExceptionalStyle = (mint: PublicKey): any => {
  switch (mint.toBase58()) {
    case '94w8qHS4XFadqJhWZzyfAS2bbj55ReFnVYB8BwewMNmf':
      return { top: 80 };
    default:
      return null;
  }
};
