export interface QuestionCreatedByMongoFE {
    UserId: string
    Name: string
    Email: string
}

export interface QuestionTagMongoFE {
    TagId: string
    Name: string
}

export interface QuestionAnswerCreatedByMongoFE {
    UserId: string
    Name: string
    Email: string
}

export interface QuestionAnswerMongoFE {
    AnswerId: string
    Title: string
    Description: string
    CreatedAt: Date
    UpdatedAt?: Date
    CreatedBy: QuestionAnswerCreatedByMongoFE
}

export interface QuestionMongoFE {
    QuestionId: string
    Title: string
    Description: string
    CreatedAt: Date
    UpdatedAt?: Date
    CreatedBy: QuestionCreatedByMongoFE
    Tags: QuestionTagMongoFE[]
    Answers: QuestionAnswerMongoFE[]
}