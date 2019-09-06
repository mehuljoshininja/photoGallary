import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Pagination } from 'antd'
import { bindActionCreators } from 'redux'
import * as photoActions from '../../actions/photos.action'
import styles from './styles.module.scss'
import GallaryList from './Layouts/GallaryList'

class Gallary extends Component {
  componentDidMount () {
    const { actions } = this.props
    actions.storePhotos()
  }

  handlePagination = (page, pageSize) => {
    const { actions } = this.props
    actions.fetchNextBatch(page)
  }

  render () {
    const { photos } = this.props
    return (
      <div className={styles.Gallary}>
        <GallaryList data={photos} />
        <div>
          <Pagination
            onChange={this.handlePagination}
            defaultCurrent={1}
            total={500}
            pageSize={15}
          />
        </div>
      </div>
    )
  }
}

const mapStateToProps = state => ({
  photos: state.photos.current,
  error: state.photos.error,
  isLoading: state.photos.loading,
  total: state.photos.total
})

const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators(photoActions, dispatch)
})

export default connect(mapStateToProps, mapDispatchToProps)(Gallary)
