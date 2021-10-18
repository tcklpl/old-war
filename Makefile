TS_COMPILER := tsc
SCSS_COMPILER := sass
RSYNC_ARGS  := -a --exclude '*.scss' --exclude '*.ts'

.PHONY: all

all: backend frontend

backend:
	@echo "[.] Compiling TS..."
	@$(TS_COMPILER)

frontend:
	@echo "[.] Copying frontend..."
	@rsync $(RSYNC_ARGS) src/frontend/ dist/frontend
	@echo "[.] Compiling SCSS..."
	@$(SCSS_COMPILER) --update src/frontend/style:dist/frontend/style

clean:
	@rm -r dist