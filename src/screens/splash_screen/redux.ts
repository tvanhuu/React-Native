import { connect } from "react-redux"
import { bindActionCreators, Dispatch } from "redux"

import { LanguageActions } from "/redux/language"
import { UserActions } from "/redux/user"
import { languageSelector, currentLanguageSelector } from "/redux/language/selector"
import { UserSelector, UserStateSelector } from "/redux/user/selector"
import { AppState } from "/redux/reducers"
import { ReduxScreenProps } from "/utils/types"

const mapStateToProps = (state: AppState) => {
  return {
    lang: languageSelector(state),
    currentLang: currentLanguageSelector(state),
    userState: UserStateSelector(state),
    userInfo: UserSelector(state),
  }
}

const mapDispatchToProps = (dispatch: Dispatch) => {
  return {
    languageActions: bindActionCreators(LanguageActions, dispatch),
    userAction: bindActionCreators(UserActions, dispatch),
  }
}

export const withRedux = connect(mapStateToProps, mapDispatchToProps)

export type SplashReduxProps = ReduxScreenProps<typeof withRedux>
