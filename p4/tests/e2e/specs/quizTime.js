describe('QuizTime', () => {
  it('Visits the homepage', () => {
      cy.visit('/')
      cy.contains('h3', 'Quiz Categories:')
  })
})