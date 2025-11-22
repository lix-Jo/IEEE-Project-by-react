"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Label } from "@/components/ui/label"
import { Trophy, CheckCircle2, XCircle } from "lucide-react"

const quizQuestions = [
  {
    question: "When was IEEE founded?",
    options: ["1963", "1884", "1920", "1975"],
    correct: 1,
  },
  {
    question: "What does IEEE stand for?",
    options: [
      "International Electrical Engineering Enterprise",
      "Institute of Electrical and Electronics Engineers",
      "Industrial Electronics and Engineering Institute",
      "International Engineering and Electronics Entity",
    ],
    correct: 1,
  },
  {
    question: "How many IEEE members are there worldwide (approximately)?",
    options: ["100,000", "400,000", "1,000,000", "50,000"],
    correct: 1,
  },
]

export function QuizSection() {
  const [currentQuestion, setCurrentQuestion] = useState(0)
  const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null)
  const [score, setScore] = useState(0)
  const [showResult, setShowResult] = useState(false)
  const [answered, setAnswered] = useState(false)

  const handleSubmit = () => {
    if (selectedAnswer === null) return

    setAnswered(true)
    if (selectedAnswer === quizQuestions[currentQuestion].correct) {
      setScore(score + 1)
    }
  }

  const handleNext = () => {
    if (currentQuestion < quizQuestions.length - 1) {
      setCurrentQuestion(currentQuestion + 1)
      setSelectedAnswer(null)
      setAnswered(false)
    } else {
      setShowResult(true)
    }
  }

  const resetQuiz = () => {
    setCurrentQuestion(0)
    setSelectedAnswer(null)
    setScore(0)
    setShowResult(false)
    setAnswered(false)
  }

  return (
    <section className="space-y-8">
      <div className="text-center space-y-2">
        <h2 className="text-4xl font-bold text-ieee-blue dark:text-white">IEEE Knowledge Quiz</h2>
        <p className="text-lg text-ieee-blue/70 dark:text-gray-400">Test your knowledge about IEEE and its history</p>
      </div>

      <Card className="max-w-2xl mx-auto bg-white/95 dark:bg-ieee-card border-ieee-light dark:border-white/10">
        <CardHeader>
          <div className="flex items-center justify-between">
            <CardTitle className="text-ieee-blue dark:text-white">
              {showResult ? "Quiz Complete!" : `Question ${currentQuestion + 1} of ${quizQuestions.length}`}
            </CardTitle>
            <Trophy className="h-6 w-6 text-ieee-accent" />
          </div>
          <CardDescription className="dark:text-gray-300">
            {showResult ? `Your score: ${score} out of ${quizQuestions.length}` : "Select the correct answer"}
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          {!showResult ? (
            <>
              <div className="space-y-4">
                <h3 className="text-xl font-semibold text-ieee-blue dark:text-white">
                  {quizQuestions[currentQuestion].question}
                </h3>

                <RadioGroup
                  value={selectedAnswer?.toString()}
                  onValueChange={(value) => !answered && setSelectedAnswer(Number.parseInt(value))}
                  disabled={answered}
                >
                  {quizQuestions[currentQuestion].options.map((option, index) => (
                    <div
                      key={index}
                      className={`flex items-center space-x-2 p-4 rounded-lg border transition-all ${
                        answered
                          ? index === quizQuestions[currentQuestion].correct
                            ? "border-green-500 bg-green-50 dark:bg-green-900/20"
                            : index === selectedAnswer
                              ? "border-red-500 bg-red-50 dark:bg-red-900/20"
                              : "border-ieee-light dark:border-white/10"
                          : "border-ieee-light dark:border-white/10 hover:border-ieee-blue dark:hover:border-ieee-accent"
                      }`}
                    >
                      <RadioGroupItem value={index.toString()} id={`option-${index}`} />
                      <Label
                        htmlFor={`option-${index}`}
                        className="flex-1 cursor-pointer text-ieee-blue dark:text-white"
                      >
                        {option}
                      </Label>
                      {answered && index === quizQuestions[currentQuestion].correct && (
                        <CheckCircle2 className="h-5 w-5 text-green-600" />
                      )}
                      {answered && index === selectedAnswer && index !== quizQuestions[currentQuestion].correct && (
                        <XCircle className="h-5 w-5 text-red-600" />
                      )}
                    </div>
                  ))}
                </RadioGroup>
              </div>

              <div className="flex gap-3">
                {!answered ? (
                  <Button
                    onClick={handleSubmit}
                    disabled={selectedAnswer === null}
                    className="flex-1 bg-ieee-blue hover:bg-ieee-blue-hover dark:bg-ieee-accent dark:hover:bg-ieee-accent/80 text-white"
                  >
                    Submit Answer
                  </Button>
                ) : (
                  <Button
                    onClick={handleNext}
                    className="flex-1 bg-ieee-blue hover:bg-ieee-blue-hover dark:bg-ieee-accent dark:hover:bg-ieee-accent/80 text-white"
                  >
                    {currentQuestion < quizQuestions.length - 1 ? "Next Question" : "See Results"}
                  </Button>
                )}
              </div>
            </>
          ) : (
            <div className="text-center space-y-6">
              <div className="text-6xl font-bold text-ieee-blue dark:text-white">
                {score}/{quizQuestions.length}
              </div>
              <p className="text-lg text-ieee-blue/70 dark:text-gray-400">
                {score === quizQuestions.length
                  ? "Perfect score! You are an IEEE expert! 🎉"
                  : score >= quizQuestions.length / 2
                    ? "Great job! Keep learning about IEEE! 👏"
                    : "Good effort! Explore more IEEE resources to improve! 📚"}
              </p>
              <Button
                onClick={resetQuiz}
                className="bg-ieee-blue hover:bg-ieee-blue-hover dark:bg-ieee-accent dark:hover:bg-ieee-accent/80 text-white"
              >
                Try Again
              </Button>
            </div>
          )}
        </CardContent>
      </Card>
    </section>
  )
}
