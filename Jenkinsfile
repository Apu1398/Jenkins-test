pipeline {
    agent {label "linux"}
   stages {
        stage('Build') { 
            steps {
                sh """
                docker build -t angular-app
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
                docker run -d -p 4300:80 angular-app:latest'
                """
            }
        }
    }
}
