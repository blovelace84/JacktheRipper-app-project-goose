// src/screens/QuizScreen.tsx
import React, { useState } from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import { StackNavigationProp } from "@react-navigation/stack";
import { RootStackParamList } from "../navigation/AppNavigator";
import questions from "../data/quizQuestions.json";

type QuizScreenNavProp = StackNavigationProp<RootStackParamList, "Quiz">;

interface Props {
  navigation: QuizScreenNavProp;
}

interface Question {
  id: string;
  question: string;
  options: string[];
  correctAnswer: string;
}

export default function QuizScreen({ navigation }: Props) {
  const [current, setCurrent] = useState(0);
  const [score, setScore] = useState(0);
  const [selected, setSelected] = useState<string | null>(null);
  const [showResult, setShowResult] = useState(false);

  const question: Question = questions[current];

  const handleAnswer = (option: string) => {
    setSelected(option);

    if (option === question.correctAnswer) {
      setScore(score + 1);
    }

    setTimeout(() => {
      if (current + 1 < questions.length) {
        setCurrent(current + 1);
        setSelected(null);
      } else {
        setShowResult(true);
      }
    }, 1000);
  };

  const handleRestart = () => {
    setCurrent(0);
    setScore(0);
    setSelected(null);
    setShowResult(false);
  };

  if (showResult) {
    return (
      <View style={styles.container}>
        <Text style={styles.resultTitle}>Quiz Complete</Text>
        <Text style={styles.resultText}>
          You scored {score} out of {questions.length}
        </Text>
        <TouchableOpacity style={styles.button} onPress={handleRestart}>
          <Text style={styles.buttonText}>Restart Quiz</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.secondaryButton}
          onPress={() => navigation.goBack()}
        >
          <Text style={styles.secondaryButtonText}>← Back</Text>
        </TouchableOpacity>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <Text style={styles.questionCount}>
        Question {current + 1} / {questions.length}
      </Text>
      <Text style={styles.questionText}>{question.question}</Text>

      {question.options.map((option) => {
        const isCorrect = option === question.correctAnswer;
        const isSelected = selected === option;

        let backgroundColor = "#1a1a2e";
        if (selected) {
          if (isSelected && isCorrect) backgroundColor = "#2ecc71";
          else if (isSelected && !isCorrect) backgroundColor = "#e63946";
        }

        return (
          <TouchableOpacity
            key={option}
            style={[styles.option, { backgroundColor }]}
            disabled={!!selected}
            onPress={() => handleAnswer(option)}
          >
            <Text style={styles.optionText}>{option}</Text>
          </TouchableOpacity>
        );
      })}

      <TouchableOpacity
        style={styles.backButton}
        onPress={() => navigation.goBack()}
      >
        <Text style={styles.backText}>← Back</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#0b0f1a",
    padding: 20,
    justifyContent: "center",
  },
  questionCount: {
    color: "#9aa4c0",
    marginBottom: 8,
    fontSize: 14,
  },
  questionText: {
    color: "#fff",
    fontSize: 20,
    fontWeight: "700",
    marginBottom: 20,
  },
  option: {
    paddingVertical: 14,
    backgroundColor: "#1a1a2e",
    borderRadius: 10,
    marginVertical: 8,
    borderWidth: 1,
    borderColor: "#2a314a",
  },
  optionText: {
    color: "#c7d0e6",
    fontSize: 16,
    textAlign: "center",
  },
  button: {
    marginTop: 20,
    padding: 14,
    backgroundColor: "#e63946",
    borderRadius: 10,
  },
  buttonText: {
    color: "#fff",
    textAlign: "center",
    fontSize: 16,
    fontWeight: "700",
  },
  secondaryButton: {
    marginTop: 12,
  },
  secondaryButtonText: {
    color: "#9aa4c0",
    textAlign: "center",
    fontSize: 16,
  },
  backButton: {
    marginTop: 20,
  },
  backText: {
    color: "#9aa4c0",
    fontSize: 16,
    textAlign: "center",
  },
  resultTitle: {
    color: "#fff",
    fontSize: 24,
    fontWeight: "700",
    textAlign: "center",
    marginBottom: 10,
  },
  resultText: {
    color: "#c7d0e6",
    fontSize: 18,
    textAlign: "center",
    marginBottom: 20,
  },
});
