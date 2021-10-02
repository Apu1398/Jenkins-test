pipeline {
    agent any
   stages {
        stage('Build') { 
            steps {
                sh """
                docker build -t angular-app .
                """
            }
        }
        stage('Test') { 
            steps {
                sh 'echo testing app...'
            }
        }
        stage('Delivery'){
            steps{
                sh """
                docker run --rm -p 4200:4200 angular-app:latest
                """
            }
        }
    }
}
