import React, { useState } from "react";
import { View, Text, TouchableOpacity } from "react-native";

interface Question {
  question: string;
  answers: string[];
  correct: number;
}

const quizData: Question[] = [
  {
    question:
      "Who is widely believed to be Jack the Ripper’s first canonical victim?",
    answers: [
      "Mary Ann Nichols",
      "Annie Chapman",
      "Martha Tabram",
      "Mary Jane Kelly",
    ],
    correct: 0,
  },
  {
    question: "In what year did the Whitechapel murders begin?",
    answers: ["1886", "1888", "1890", "1879"],
    correct: 1,
  },
  {
    question: "Which London district was the center of the Ripper murders?",
    answers: ["Soho", "Brixton", "Whitechapel", "Chelsea"],
    correct: 2,
  },
  {
    question: "Which victim suffered the most severe injuries?",
    answers: [
      "Elizabeth Stride",
      "Catherine Eddowes",
      "Mary Jane Kelly",
      "Annie Chapman",
    ],
    correct: 2,
  },
];

export default function QuizScreen() {
  const [current, setCurrent] = useState(0);
  const [selected, setSelected] = useState<number | null>(null);
  const [score, setScore] = useState(0);
  const [showScore, setShowScore] = useState(false);

  const question = quizData[current];

  const handleAnswer = (index: number) => {
    setSelected(index);

    if (index === question.correct) {
      setScore(score + 1);
    }

    setTimeout(() => {
      if (current + 1 < quizData.length) {
        setCurrent(current + 1);
        setSelected(null);
      } else {
        setShowScore(true);
      }
    }, 800);
  };

  return (
    <View className="flex-1 bg-black px-6 pt-12">
      <Text className="text-red-500 text-3xl font-bold mb-6 text-center">
        Whitechapel Quiz
      </Text>

      {showScore ? (
        <View className="flex-1 items-center justify-center">
          <Text className="text-white text-2xl font-bold mb-4">
            Your Score: {score} / {quizData.length}
          </Text>

          <TouchableOpacity
            className="bg-red-700 p-4 rounded-xl mt-4"
            onPress={() => {
              setCurrent(0);
              setScore(0);
              setSelected(null);
              setShowScore(false);
            }}
          >
            <Text className="text-white text-xl font-semibold">
              Restart Quiz
            </Text>
          </TouchableOpacity>
        </View>
      ) : (
        <View>
          {/* QUESTION */}
          <Text className="text-white text-xl mb-6">
            {current + 1}. {question.question}
          </Text>

          {/* ANSWERS */}
          {question.answers.map((answer, idx) => {
            const isCorrect = selected === idx && idx === question.correct;
            const isWrong = selected === idx && idx !== question.correct;

            return (
              <TouchableOpacity
                key={idx}
                onPress={() => handleAnswer(idx)}
                disabled={selected !== null}
                className={`
                  p-4 rounded-xl mb-4 border 
                  ${isCorrect ? "bg-green-800 border-green-500" : ""}
                  ${isWrong ? "bg-red-900 border-red-700" : ""}
                  ${
                    selected === null
                      ? "bg-[#1a0000] border-red-900"
                      : "opacity-60"
                  }
                `}
              >
                <Text className="text-white text-lg">{answer}</Text>
              </TouchableOpacity>
            );
          })}

          {/* PROGRESS */}
          <Text className="text-red-400 text-center mt-8">
            Question {current + 1} / {quizData.length}
          </Text>
        </View>
      )}
    </View>
  );
}
