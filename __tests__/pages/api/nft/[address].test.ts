import request from 'supertest';

describe('testing /api/nft/:address ', () => {
  it('Should return jacob.eth NFTs', async () => {
    const res = await request('http://localhost:3000').get('/api/nft/jacob.eth');
    expect(res.statusCode).toBe(200);
    expect(res.header['content-type']).toBe("application/json; charset=utf-8");
    expect(res.body).toHaveLength(10);
    expect(res.body[0].collectionAddress).toEqual('0xca21d4228cdcc68d4e23807e5e370c07577dd152')
  })
})
