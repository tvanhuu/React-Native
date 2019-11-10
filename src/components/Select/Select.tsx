// import React from "react"
// import { ScrollView, TouchableOpacity, View } from "react-native"
// import { Menu, MenuOption, MenuOptions, MenuTrigger, renderers } from "react-native-popup-menu"
// import Icon from "react-native-vector-icons/FontAwesome"

// import { SelectOption, SelectProps, SelectState } from "/components/Select/types"
// import { Text } from "/components/Text"
// import { lang } from "/languages"

// import styles from "./styles"

// export default class Select extends React.Component<SelectProps, SelectState> {
//   state: SelectState = {
//     valueSelect: ""
//   }

//   constructor(props: SelectProps) {
//     super(props)

//     this.onSelect = this.onSelect.bind(this)
//   }

//   onSelect(value: SelectOption) {
//     this.setState({ valueSelect: value.label })
//     if (this.props.onSelect) this.props.onSelect(value)
//   }

//   _renderMenuTrigger() {
//     const { label, refresh } = this.props
//     const { valueSelect } = this.state

//     const customStyles = {
//       triggerOuterWrapper: styles.triggerOuterWrapper,
//       TriggerTouchableComponent: TouchableOpacity,
//       triggerWrapper: [styles.triggerWrapper, this.props.width ? { width: this.props.width } : {}]
//     }

//     return (
//       <MenuTrigger customStyles={customStyles} disabled={this.props.disabled}>
//         <Text style={styles.label} typography="bold">
//           {label || valueSelect}
//         </Text>
//         <Icon style={styles.arrow} name="sort-down" />
//       </MenuTrigger>
//     )
//   }

//   renderItemMenu() {
//     return (
//       <ScrollView>
//         {this.props.options.map((option, index) => (
//           <MenuOption
//             value={option.value}
//             key={option.label || `${index}`}
//             onSelect={this.onSelect.bind(this, option, index)}
//           >
//             <Text style={styles.label}>{option.label}</Text>
//           </MenuOption>
//         ))}
//       </ScrollView>
//     )
//   }

//   _renderMenuOption() {
//     const customStyles = {
//       optionsContainer: [
//         styles.optionsContainer,
//         this.props.menuStyle,
//         this.props.width ? { width: this.props.width } : {}
//       ],
//       optionWrapper: styles.optionWrapper
//     }
//     return <MenuOptions customStyles={customStyles}>{this.renderItemMenu()}</MenuOptions>
//   }

//   render() {
//     return (
//       <View style={[styles.container, this.props.containerStyle]}>
//         <Menu renderer={renderers.Popover} rendererProps={{ preferredPlacement: "bottom" }}>
//           {this._renderMenuTrigger()}
//           {this._renderMenuOption()}
//         </Menu>
//       </View>
//     )
//   }
// }
