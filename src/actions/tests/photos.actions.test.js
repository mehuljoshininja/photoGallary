import * as actions from '../photos.action'
import * as types from '../actionTypes'

describe('actions', () => {
  it('should create an action to store images', () => {
    const mockData = [{
        id: 1,
        albumId: 1,
        title: 'image',
        url: 'http://images.com',
        thubmnailUrl: 'http://thumbnailUrl.com'
    }]
    const expectedAction = {
      type: types.STORE_IMAGE,
      payload: mockData
    }
    expect(actions.storePhotos(mockData)).toEqual(expectedAction)
  })

  it('should create an action for pagination', () => {
    const mockData = {
        payload: 2
    }
    
    const expectedAction = {
      type: types.STORE_NEXT_BATCH,
      payload: mockData
    }
  expect(actions.fetchNextBatch(mockData)).toEqual(expectedAction)
})

it('should create an action for select favourite image', () => {
    const mockData = {
        payload: 3
    }
    
    const expectedAction = {
      type: types.ADD_TO_FAV,
      payload: mockData
    }
  expect(actions.selectFavImage(mockData)).toEqual(expectedAction)
})


})