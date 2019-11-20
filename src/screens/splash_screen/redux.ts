import { connect } from "react-redux"
import { bindActionCreators, Dispatch } from "redux"

import { LanguageActions } from "/redux/language"
import { languageSelector, currentLanguageSelector } from "/redux/language/selector"
import { AppState } from "/redux/reducers"
import { ReduxScreenProps } from "/utils/types"

const mapStateToProps = (state: AppState) => {
  return {
    lang: languageSelector(state),
    currentLang: currentLanguageSelector(state),
  }
}

const mapDispatchToProps = (dispatch: Dispatch) => {
  return {
    languageActions: bindActionCreators(LanguageActions, dispatch),
  }
}

export const withRedux = connect(mapStateToProps, mapDispatchToProps)

export type SplashReduxProps = ReduxScreenProps<typeof withRedux>
