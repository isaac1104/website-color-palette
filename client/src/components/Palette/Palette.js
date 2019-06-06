import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Tabs } from 'antd';
import PaletteColor from '../PaletteColor/PaletteColor';
import { fetchColorsData } from '../../actions';
import styles from './Palette.module.css';

const { TabPane } = Tabs;

class Palette extends Component {
  componentDidMount() {
    this.props.fetchColorsData();
  }

  renderPaletteColors(tabName) {
    const { data } = this.props.colors;
    return (
      <TabPane
        tab={tabName}
        key={tabName}
        className={styles.Palette}
      >
        {data.map(color => (
          <PaletteColor
            key={color.name}
            color={color}
            onClick={() => console.log(color.name)}
          />
        ))}
      </TabPane>
    );
  }

  render() {
    return (
      <Tabs tabPosition='left'>
        {this.renderPaletteColors('Background Colors')}
        {this.renderPaletteColors('Text Colors')}
        {this.renderPaletteColors('Button Colors')}
      </Tabs>
    );
  }
}

const mapStateToProps = ({ colors }) => {
  return {
    colors
  };
};

export default connect(mapStateToProps, { fetchColorsData })(Palette);
