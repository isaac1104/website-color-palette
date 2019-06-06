import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Tabs } from 'antd';
import PaletteColor from '../PaletteColor/PaletteColor';
import { fetchColorsData, selectBackgroundColor, selectTextColor, selectButtonColor, selectButtonTextColor } from '../../actions';
import styles from './Palette.module.css';

const { TabPane } = Tabs;

class Palette extends Component {
  componentDidMount() {
    this.props.fetchColorsData();
  }

  renderPaletteColors({ tab_type, event }) {
    const { data } = this.props.colors;
    return (
      <TabPane
        tab={tab_type}
        key={tab_type}
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
    const { selectBackgroundColor, selectTextColor, selectButtonColor, selectButtonTextColor } = this.props;
    return (
      <Tabs tabPosition='left'>
        {this.renderPaletteColors({ tab_type: 'Background', event: selectBackgroundColor })}
        {this.renderPaletteColors({ tab_type: 'Text', event: selectTextColor })}
        {this.renderPaletteColors({ tab_type: 'Button', event: selectButtonColor })}
        {this.renderPaletteColors({ tab_type: 'Button Text', event: selectButtonTextColor })}
      </Tabs>
    );
  }
}

const mapStateToProps = ({ colors }) => {
  return {
    colors
  };
};

export default connect(mapStateToProps, { fetchColorsData, selectBackgroundColor, selectTextColor, selectButtonColor, selectButtonTextColor })(Palette);
