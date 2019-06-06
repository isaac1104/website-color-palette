import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Tabs } from 'antd';
import PaletteColor from '../PaletteColor/PaletteColor';
import { fetchColorsData, selectBackgroundColor, selectTextColor, selectButtonColor } from '../../actions';
import styles from './Palette.module.css';

const { TabPane } = Tabs;

class Palette extends Component {
  componentDidMount() {
    this.props.fetchColorsData();
  }

  renderPaletteColors({ type, event }) {
    const { data } = this.props.colors;
    return (
      <TabPane
        tab={type}
        key={type}
        className={styles.PaletteTabPane}
      >
        {data.map(color => (
          <PaletteColor
            key={color.name}
            color={color}
            onClick={() => event(color.hex)}
          />
        ))}
      </TabPane>
    );
  }

  render() {
    const { selectBackgroundColor, selectTextColor, selectButtonColor } = this.props;
    return (
      <Tabs tabPosition='left'>
        {this.renderPaletteColors({ type: 'Background', event: selectBackgroundColor })}
        {this.renderPaletteColors({ type: 'Text', event: selectTextColor })}
        {this.renderPaletteColors({ type: 'Button', event: selectButtonColor })}
      </Tabs>
    );
  }
}

const mapStateToProps = ({ colors }) => {
  return {
    colors
  };
};

export default connect(mapStateToProps, { fetchColorsData, selectBackgroundColor, selectTextColor, selectButtonColor })(Palette);
