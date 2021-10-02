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
                docker run -d -p 4300:4300 angular-app:latest
                """
                input message: 'Finished using the web site?'
                input message: 'Finished using the web site? (Click "Proceed" to continue)'
            }
        }
    }
}