pipeline {
    agent any
   stages {
        stage('Build') { 
            steps {
                bat ''' cd WebApp & npm i & npm run build & docker build -t web-app .'''
                bat ''' cd Api & npm i & docker build -t api .'''
            }
        }
        stage('Test') { 
            steps {
                bat '''  ECHO testing  '''
            }
        }
        stage('Delivery'){
            steps{
                bat ''' FOR /f "tokens=*" %i IN ('docker ps -q') DO docker stop %i '''
                bat ''' docker-compose up -d '''
            }
        }
    }
}