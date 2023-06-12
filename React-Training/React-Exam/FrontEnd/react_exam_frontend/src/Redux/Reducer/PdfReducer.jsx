import { DownloadPDFTypes } from "../ActionType";

const initialState = {
    pdf_data: null,
    error: null,
    isLoading: false
}

const PDFReducer = (state = initialState, actions) => {
    switch (actions.type) {
        case (DownloadPDFTypes.DOWNLOAD_PDF_REQUEST):
            return {
                ...state, isLoading: true
            }
        case (DownloadPDFTypes.DOWNLOAD_PDF_SUCCESS):
            return {
                ...state, isLoading: false, pdf_data: actions.payload
            }
        case (DownloadPDFTypes.DOWNLOAD_PDF_FAIL):
            return {
                ...state, isLoading: false, error: actions.payload
            }
        default:
            return state
    }
}
export default PDFReducer