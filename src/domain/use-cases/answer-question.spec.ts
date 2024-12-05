import { describe, expect, it } from 'vitest'
import { AnswerQuestionUseCase } from './answer-question'

it('should be able to create an answer', () => {
    const answerQuestion = new AnswerQuestionUseCase()

    const answer = answerQuestion.execute({
        questionId: '1',
        instructorId: '1',
        content: 'New answer'
    })

    expect(answer.content).toEqual('New answer')
}) 