pipeline{
  agent any
  tools{
    maven 'Maven3'
    jdk 'JDK17'
  }
  stages{
    stage('Checkout'){
      steps{
        git url:'https://github.com/jamunarbk/Course-Registration-System.git'
      }
    }
    stage('Build'){
      steps{
        sh 'mvn clean package'
      }
    }
    stage('Test'){
      steps{
        sh 'mvn test'
      }
    }
    stage('Package'){
      steps{
        echo 'Build successfull!'
      }
    }
  }
}
