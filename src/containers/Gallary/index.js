import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Pagination, Modal } from 'antd'
import { bindActionCreators } from 'redux'
import * as photoActions from '../../actions/photos.action'
import styles from './styles.module.scss'
import GallaryList from './Layouts/GallaryList'

class Gallary extends Component {
  constructor (props) {
    super(props)
    this.state = {
      openPreview: false,
      preview: {}
    }
  }

  componentDidMount () {
    const { actions } = this.props
    actions.storePhotos()
  }

  handlePagination = (page, pageSize) => {
    const { actions } = this.props
    actions.fetchNextBatch(page)
  }

  showPreivew = (id) => {
    const { photos } = this.props
    console.log('id', id)
    const preview = photos.find(x => x.id === id)
    this.setState({
      openPreview: true,
      preview
    })
  }

  render () {
    const { photos } = this.props
    const { preview, openPreview } = this.state
    return (
      <div className={styles.Gallary}>
        <div className={styles.Gallary__header}>
          <p>Gallary </p>
        </div>
        <GallaryList data={photos} showPreivew={this.showPreivew} />
        <div className={styles.Gallary__pagination}>
          <Pagination
            onChange={this.handlePagination}
            defaultCurrent={1}
            total={500}
            pageSize={15}
          />
        </div>
        <Modal
          visible={openPreview}
          title='preview'
          onCancel={() => this.setState({ openPreview: false, preview: {} })}
          footer={false}
          width={700}
          closable={false}
        >
          <img src={preview.url} />

        </Modal>
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
