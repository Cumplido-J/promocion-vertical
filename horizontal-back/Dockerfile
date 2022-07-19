#FROM openjdk:11 as build
FROM adoptopenjdk/openjdk11-openj9:alpine as build


WORKDIR /app


COPY mvnw .
COPY .mvn .mvn
RUN chmod +x mvnw


COPY pom.xml .


RUN dos2unix mvnw
RUN ./mvnw dependency:go-offline -B


COPY src src


RUN ./mvnw package -DskipTests
RUN mkdir -p target/dependency && (cd target/dependency; jar -xf ../*.jar)


FROM openjdk:11-jre

ARG DEPENDENCY=/app/target/dependency


COPY --from=build ${DEPENDENCY}/BOOT-INF/lib /app/lib
COPY --from=build ${DEPENDENCY}/META-INF /app/META-INF
COPY --from=build ${DEPENDENCY}/BOOT-INF/classes /app

ENTRYPOINT ["java","-cp","app:app/lib/*","com.promocion.horizontalback.HorizontalBackApplication"]