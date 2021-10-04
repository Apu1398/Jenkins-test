pipeline {
    agent any
   stages {
        stage('Build') { 
            steps {
                bat '''  docker build -t angular-jenkins . '''
                
            }
        }
        stage('Test') { 
            steps {
                bat '''  ECHO testing  '''
            }
        }
        stage('Delivery'){
            steps{
                bat ''' docker run -d -p 4300:80 angular-jenkins:latest  '''
            }
        }
    }
}