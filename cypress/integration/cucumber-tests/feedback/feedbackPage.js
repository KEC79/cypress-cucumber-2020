const URL = "http://zero.webappsecurity.com/feedback.html"
const NAME_INPUT = "#name"
const EMAIL_INPUT = "#email"
const SUBJECT_INPUT = "#subject"
const COMMENT_INPUT = "#comment"
const SUBMIT_BUTTON = 'input[name="submit"]'
const SUCCESS_MESSAGE = ".offset3"

class FeedbackPage {
    static visit() {
        cy.visit(URL)
    }

    static fillFeedbackForm() {
        cy.get(NAME_INPUT).type("Kim")
        cy.get(EMAIL_INPUT).type("test@test.com")
        cy.get(SUBJECT_INPUT).type("This is a subject")
        cy.get(COMMENT_INPUT).type("This is a comment")
    }

    static fillFeedbackFormWithTable(formData) {
        cy.get(NAME_INPUT).type(formData.name)
        cy.get(EMAIL_INPUT).type(formData.email)
        cy.get(SUBJECT_INPUT).type(formData.subject)
        cy.get(COMMENT_INPUT).type(formData.comment)
    }

    static submitFeedbackForm() {
        cy.get(SUBMIT_BUTTON).click()
    }

    static canSeeSuccessMessage(message) {
        cy.get(SUCCESS_MESSAGE).contains(message)
    }
}

export default FeedbackPage