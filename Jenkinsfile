pipeline {
    agent {
        docker {
            image 'node:lts'
            args '-p 3000:4200'
        }
    }
    environment {
        CI = 'true'
    }
    stages {
        stage('Build') {
            steps {
                sh 'npm install'
            }
        }
        stage('Test') {
            steps {
                sh 'echo testing app...'
            }
        }
        stage('Deliver') {
            steps {
                sh 'npm run ng serve'                
            }
        }
    }
}
