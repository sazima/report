FROM eclipse-temurin:8-jre

RUN mkdir -p /opt/aj-report/logs

WORKDIR /opt/aj-report

COPY ../../build/aj-report-1.4.0.RELEASE /opt/aj-report

CMD mkdir -p /opt/aj-report/logs && echo '' >> /opt/aj-report/logs/aj-report.log && /opt/aj-report/bin/start.sh && tail -f /opt/aj-report/logs/aj-report.log
