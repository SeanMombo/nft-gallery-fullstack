import create from 'zustand'

interface NFT {
  collectionAddress: string,
  tokenId: string,
  name: string,
  owner: string,
  image: { url: string },
  metadata: { 
    name: string,
    description: string,
    image: string,
  }
}

interface NftState {
  nfts: Array<NFT>,
  setNfts: (arr: Array<NFT>) => void,
  error: string,
  setError: (err: string) => void,
}

const useNftStore = create<NftState>((set) => ({
  nfts: [],
  setNfts: (arr) => set(() => ({ nfts: arr })),
  error: '',
  setError: (err) => set(() => ({ error: err })),
}))

export default useNftStore;