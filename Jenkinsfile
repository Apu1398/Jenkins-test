pipeline {
    agent any
   stages {
        stage('Build') { 
            steps {
                bat ''' ECHO building '''
            }
        }
        stage('Test') { 
            steps {
                bat '''  ECHO testing  '''
            }
        }
        stage('Delivery'){
            steps{
                bat '''  docker build -t angular-jenkins . '''
                bat ''' docker stop jenkins-angular '''
                bat ''' docker run -d -p 4300:80 --name jenkins-angular angular-jenkins:latest  '''
            }
        }
    }
}